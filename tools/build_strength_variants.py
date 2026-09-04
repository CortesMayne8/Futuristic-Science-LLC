#!/usr/bin/env python3
"""Generate one vial render per strength for every variable product.

Ten products in exports/woocommerce-products.csv sell the same peptide at two
or three strengths, but the catalog ships a single render per compound -- so a
5mg variation was showing a 10mg vial in the cart. This builds the missing
per-strength renders into assets/variants/ so each Woo variation can carry an
image that matches what the customer is buying.

    python3 tools/build_strength_variants.py
"""
import csv
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CSV = os.path.join(ROOT, "exports", "woocommerce-products.csv")
OUT = os.path.join(ROOT, "assets", "variants")
OUT_MIN = os.path.join(ROOT, "assets-min", "variants")
SIZE = 1200      # assets/variants — full-quality square masters
SIZE_MIN = 700   # assets-min/variants — the copies the import CSV links to

# SKU -> the master render carrying that compound's label.
SOURCES = {
    "FS-RETATRUTIDE": "vial-reta-3.png",
    "FS-TIRZEPATIDE": "vial-tirz-2.png",
    "FS-GHK-CU": "vial-ghk-cu.png",
    "FS-BPC-157": "vial-bpc-157.png",
    "FS-TB-500": "vial-tb-500.png",
    "FS-MOTS-C": "vial-mots-c.png",
    "FS-SELANK": "vial-selank.png",
    "FS-SEMAX": "vial-semax.png",
    "FS-NAD-PLUS": "vial-nad-plus.png",
    "FS-TESAMORELIN": "vial-tesamorelin.png",
}


def slug(sku):
    return sku.replace("FS-", "").lower()


def main():
    with open(CSV, newline="", encoding="utf-8") as fh:
        rows = list(csv.DictReader(fh))

    made, failed = [], []
    for row in rows:
        if row["Type"] != "variable":
            continue
        sku = row["SKU"]
        if sku not in SOURCES:
            continue
        strengths = [s.strip() for s in row["Attribute 1 value(s)"].split("|") if s.strip()]
        if len(strengths) < 2:
            continue
        src = os.path.join(ROOT, "assets", SOURCES[sku])
        for strength in strengths:
            name = f"vial-{slug(sku)}-{strength}.png"
            for out_dir, size in ((OUT, SIZE), (OUT_MIN, SIZE_MIN)):
                dest = os.path.join(out_dir, name)
                cmd = [sys.executable, os.path.join(HERE, "vial_strength.py"),
                       src, strength, "-o", dest, "--square", str(size)]
                result = subprocess.run(cmd, capture_output=True, text=True)
                if result.returncode == 0:
                    made.append(os.path.relpath(dest, ROOT))
                else:
                    failed.append((os.path.relpath(dest, ROOT),
                                   result.stderr.strip().splitlines()[-1]))

    for path in made:
        print("ok   ", path)
    for path, err in failed:
        print("FAIL ", path, "--", err)
    print(f"\n{len(made)} rendered, {len(failed)} failed")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
