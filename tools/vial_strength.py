#!/usr/bin/env python3
"""Stamp a strength (e.g. 5mg / 10mg / 70mg) onto a Futuristic Science vial render.

Every vial in assets/ is the same label template: a compound-name bar, a gold
tick pair, and the strength line between those ticks. Product variations sell
the same peptide at several strengths, so one render per compound is not enough
-- a 5mg variation showing a 10mg vial is a trust problem on the cart page.

This rewrites just the strength line, keeping the render, lighting and label
background untouched.

    python3 tools/vial_strength.py assets/vial-bpc-157.png 10mg \
        -o assets/variants/vial-bpc-157-10mg.png

    # cart/product ready 1:1 export with transparent background
    python3 tools/vial_strength.py assets/vial-bpc-157.png 5mg \
        -o assets/variants/vial-bpc-157-5mg.png --square 1200
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
SS = 4  # supersample factor for text rendering


def load_font(size):
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    raise SystemExit("No bold sans font found; install fonts-liberation.")


def find_ticks(rgb, alpha):
    """Locate the two short gold tick marks that flank the strength line."""
    h, w = alpha.shape
    gold = (
        (rgb[..., 0] > 150)
        & (rgb[..., 0].astype(int) - rgb[..., 2] > 45)
        & (alpha > 200)
    )
    # The ticks live in the lower half of the label, clear of the cap and of
    # the gold bands framing the compound-name bar.
    top = int(h * 0.66)
    band = gold[top:int(h * 0.82)]
    counts = band.sum(0)
    lit = np.nonzero(counts > band.shape[0] * 0.25)[0]
    if len(lit) < 2:
        raise SystemExit("Could not find the gold tick marks; pass --ticks.")
    groups, start = [], lit[0]
    for prev, cur in zip(lit, lit[1:]):
        if cur - prev > 5:
            groups.append((start, prev))
            start = cur
    groups.append((start, lit[-1]))
    if len(groups) < 2:
        raise SystemExit("Could not separate the gold tick marks; pass --ticks.")
    return groups[0], groups[-1], gold, top


def runs_of(mask_rows, gap=3):
    rows = np.nonzero(mask_rows)[0]
    if len(rows) == 0:
        return []
    out, start, prev = [], rows[0], rows[0]
    for r in rows[1:]:
        if r - prev > gap:
            out.append((int(start), int(prev)))
            start = r
        prev = r
    out.append((int(start), int(prev)))
    return out


def find_text_box(rgb, alpha, gold, left, right, top):
    """Dark bbox of the existing strength text, strictly between the ticks.

    A vial label carries several gold rules, so the tick pair is identified as
    the one with dark text sitting between its two marks.
    """
    tick_l, tick_r = left[1], right[0]
    xs, xe = tick_l + 8, tick_r - 8
    dark = (rgb.sum(2) < 330) & (alpha > 200)
    gap = xe - xs
    # Ticks can render as little as one pixel wide, so take either mark.
    marks = (gold[:, left[0]:left[1] + 1].any(1)
             | gold[:, right[0]:right[1] + 1].any(1))
    best = None
    for y0, y1 in runs_of(marks):
        if y1 < top or not 25 <= y1 - y0 <= 150:
            continue
        rows = slice(y0, y1 + 1)
        # A tick is a short mark, not a rule: the gold must stop at the ticks.
        # This rejects the gold-bordered compound-name bar, which spans the
        # full label width at the same kind of height.
        if gold[rows, xs:xe].mean() > 0.10:
            continue
        strip = dark[rows, xs:xe]
        ry, rx = np.nonzero(strip)
        if len(rx) < 40:
            continue
        # The strength line is centered type, so it never fills the tick gap.
        if (rx.max() - rx.min()) > gap * 0.92:
            continue
        score = int(strip.sum())
        if best is None or score > best[0]:
            best = (score, y0, y1)
    if best is None:
        raise SystemExit("Could not find the existing strength text; pass --box.")
    _, y0, y1 = best
    pad = 6
    ys, ye = max(0, y0 - pad), min(alpha.shape[0], y1 + pad + 1)
    ry, rx = np.nonzero(dark[ys:ye, xs:xe])
    return xs + rx.min(), xs + rx.max(), ys + ry.min(), ys + ry.max()


def erase(img, tick_l, tick_r, tx0, tx1, ty0, ty1, seed=7):
    """Repaint the strength line with the label background around it.

    The label is a soft vertical gradient with a gentle cylinder falloff, so
    each row is rebuilt by interpolating between clean samples taken just
    inside each tick, then re-grained so the patch does not read as plastic.
    """
    a = np.array(img).astype(np.float64)
    pad = 10
    y0, y1 = max(0, ty0 - pad), min(a.shape[0] - 1, ty1 + pad)
    x0, x1 = tick_l + 5, tick_r - 5
    sample = 14
    rng = np.random.default_rng(seed)
    ramp = np.linspace(0.0, 1.0, x1 - x0 + 1)[:, None]
    for y in range(y0, y1 + 1):
        left = a[y, x0:x0 + sample, :3].mean(0)
        right = a[y, x1 - sample + 1:x1 + 1, :3].mean(0)
        a[y, x0:x1 + 1, :3] = left * (1 - ramp) + right * ramp
    grain_zone = a[y0:y1 + 1, x0:x1 + 1, :3]
    # Match the grain amplitude of untouched label rows above the patch.
    ref = np.array(img)[max(0, y0 - 30):y0, x0:x1 + 1, :3].astype(np.float64)
    amp = float(ref.std()) if ref.size else 1.5
    amp = min(max(amp, 0.8), 2.2)
    grain = rng.normal(0.0, amp, grain_zone.shape[:2])[..., None]
    a[y0:y1 + 1, x0:x1 + 1, :3] = np.clip(grain_zone + grain, 0, 255)
    patched = Image.fromarray(a.astype(np.uint8), "RGBA")
    # Feather the patch edges into the untouched label.
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rectangle([x0 + 2, y0 + 2, x1 - 2, y1 - 2], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(7))
    out = img.copy()
    out.paste(patched, (0, 0), mask)
    return out


def text_color(img, tx0, tx1, ty0, ty1):
    a = np.array(img)[ty0:ty1 + 1, tx0:tx1 + 1, :3].astype(int)
    flat = a.reshape(-1, 3)
    darkest = flat[flat.sum(1).argsort()[: max(1, len(flat) // 25)]]
    return tuple(int(v) for v in darkest.mean(0))


def render_text(text, target_w, target_h, color):
    """Render `text` so its ink bbox matches the original line's bbox."""
    size = target_h * SS
    for _ in range(60):
        font = load_font(int(size))
        probe = Image.new("L", (target_w * SS * 3, target_h * SS * 4), 0)
        ImageDraw.Draw(probe).text((probe.width // 2, probe.height // 2), text,
                                   font=font, fill=255, anchor="mm")
        box = probe.getbbox()
        if not box:
            raise SystemExit("Text render failed.")
        h = box[3] - box[1]
        if abs(h - target_h * SS) <= 1:
            break
        size *= (target_h * SS) / h
    layer = Image.new("RGBA", probe.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).text((probe.width // 2, probe.height // 2), text,
                               font=font, fill=color + (255,), anchor="mm")
    layer = layer.crop(probe.getbbox())
    w = max(1, round(layer.width / SS))
    h = max(1, round(layer.height / SS))
    return layer.resize((w, h), Image.LANCZOS)


def square(img, size, margin=0.04):
    """Center the vial on a transparent 1:1 canvas (Woo thumbnails are square)."""
    trimmed = img.crop(img.getchannel("A").getbbox())
    inner = int(size * (1 - margin * 2))
    scale = min(inner / trimmed.width, inner / trimmed.height)
    trimmed = trimmed.resize(
        (max(1, round(trimmed.width * scale)), max(1, round(trimmed.height * scale))),
        Image.LANCZOS,
    )
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(trimmed, ((size - trimmed.width) // 2, (size - trimmed.height) // 2))
    return canvas


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("src")
    p.add_argument("strength", help='e.g. "10mg"')
    p.add_argument("-o", "--out", required=True)
    p.add_argument("--square", type=int, default=0,
                   help="also fit the vial on a transparent NxN canvas")
    p.add_argument("--box", nargs=4, type=int, metavar=("X0", "X1", "Y0", "Y1"),
                   help="override the detected strength-text bbox")
    args = p.parse_args()

    img = Image.open(args.src).convert("RGBA")
    arr = np.array(img)
    rgb, alpha = arr[..., :3].astype(int), arr[..., 3]

    left, right, gold, top = find_ticks(rgb, alpha)
    tick_l, tick_r = left[1], right[0]
    if args.box:
        tx0, tx1, ty0, ty1 = args.box
    else:
        tx0, tx1, ty0, ty1 = find_text_box(rgb, alpha, gold, left, right, top)

    color = text_color(img, tx0, tx1, ty0, ty1)
    out = erase(img, tick_l, tick_r, tx0, tx1, ty0, ty1)
    layer = render_text(args.strength, tx1 - tx0 + 1, ty1 - ty0 + 1, color)
    # A longer strength (1000mg vs 5mg) must still clear the tick marks.
    room = int((tick_r - tick_l) * 0.86)
    if layer.width > room:
        scale = room / layer.width
        layer = layer.resize((room, max(1, round(layer.height * scale))),
                             Image.LANCZOS)
        ty0 += (ty1 - ty0 + 1 - layer.height) // 2
    cx = (tick_l + tick_r) // 2
    out.alpha_composite(layer, (cx - layer.width // 2, ty0))

    if args.square:
        out = square(out, args.square)

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    out.save(args.out, optimize=True)
    print(f"{args.src} -> {args.out}  strength={args.strength} "
          f"ticks=({tick_l},{tick_r}) box=({tx0},{tx1},{ty0},{ty1}) ink={color}")


if __name__ == "__main__":
    sys.exit(main())
