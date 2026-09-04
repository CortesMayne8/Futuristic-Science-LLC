#!/usr/bin/env python3
"""Point every variation row in the import CSV at its own strength render.

WooCommerce falls back to the parent product image whenever a variation has no
image of its own -- which is why a 5mg vial was showing a 10mg label in the
cart. Filling the Images column on the variation rows makes the photo follow
the selected strength.

Run tools/build_strength_variants.py first, then:

    python3 tools/link_variation_images.py
"""
import csv
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV = os.path.join(ROOT, "exports", "woocommerce-import-ready.csv")
BASE = "https://cortesmayne8.github.io/Futuristic-Science-LLC/assets-min/variants"
MIN_DIR = os.path.join(ROOT, "assets-min", "variants")


def main():
    with open(CSV, newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        fields = reader.fieldnames
        rows = list(reader)

    linked, skipped = 0, []
    for row in rows:
        if row["Type"] != "variation" or row["Images"].strip():
            continue
        strength = row["Attribute 1 value(s)"].strip()
        parent = row["Parent"].strip()
        if not strength or not parent:
            continue
        name = f"vial-{parent.replace('FS-', '').lower()}-{strength}.png"
        if not os.path.exists(os.path.join(MIN_DIR, name)):
            skipped.append((row["SKU"], name))
            continue
        row["Images"] = f"{BASE}/{name}"
        linked += 1

    with open(CSV, "w", newline="", encoding="utf-8") as fh:
        # Keep the file's LF endings so the diff stays to the Images column.
        writer = csv.DictWriter(fh, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)

    print(f"{linked} variation rows linked to a strength render")
    for sku, name in skipped:
        print(f"  no render for {sku} (expected {name}) — left on the parent image")
    return 0


if __name__ == "__main__":
    sys.exit(main())
