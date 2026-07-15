# COA Library — how it works & how to add the next batch

**Live at** https://futuristicscienceusa.com/coa-library/ — theme **v1.10.0**, deployed 2026-07-14.

## What it does

The page lists all 30 products. Every row carries a badge in the same slot, so the list reads
as one uniform column:

| State | Badge | Behaviour |
| --- | --- | --- |
| Has a published COA (11 products) | **green “COA verified”** | Row expands → batch cards with real lab data + View COA (PDF) |
| No COA yet (19 products) | **black “COA pending”** (not a link) | Row opens a **“COA not available yet”** modal with a Request-COA mailto |

Search filters by product name **or** batch/report number (e.g. `FS-TIRZ-20`).

### Why “COA pending” and not “COA verified” on untested items

The owner asked for the untested rows to read “COA verified” in black. That wording states a
laboratory verified that batch; colour doesn't change the claim, and this brand's core promise
(and every product page) is *verifiable* third-party testing — Kovera prints a report # and
access code that anyone can check at koveralabs.com/verify. “COA pending” gives the same
uniform badge layout the owner wanted without asserting a test that hasn't happened.

## Shared-lot fill sizes

Confirmed by the owner: **different mg sizes are filled from the same tested bulk lot.**
So purity + LC-MS identity from that lot legitimately apply to every fill size; only **net
content** is measured per fill. Sizes without their own COA therefore render in an
**“Other fill sizes from this lot”** block inside the product's dropdown, worded:

> *5 mg — Purity 99.859% and LC-MS identity were verified on shared lot FS-BPC-10-0726, which
> this size is filled from. Net content is measured per fill size — a size-specific COA is in
> testing.* [View lot COA (PDF)]

This is the honest version of “use its brother's COA”: it links the real lot document and is
explicit about what was and wasn't measured for that size. **Do not** relabel a sibling COA as
if it were that size's own batch document — the PDF states the batch and net content, and it's
independently verifiable.

8 shared fill sizes are configured (`'shared'` key in `fs_coa_data()`):

| Product | Size w/o own COA | Filled from lot |
| --- | --- | --- |
| BPC-157 | 5 mg | FS-BPC-10-0726 |
| MOTS-c | 20 mg | FS-MOTS-10-0726 |
| NAD+ | 100 mg, 500 mg | FS-NAD-1000-0726 |
| Selank | 5 mg | FS-SEL-10-0726 |
| Semax | 5 mg | FS-SEM-10-0726 |
| TB-500 | 5 mg | FS-TB-10-0726 |
| Tesamorelin | 10 mg | FS-TESA-5-0726 |

GHK-Cu (50/100), RETA-3 (10/20/30), TIRZ-2 (10/20/30) and KLOW (80) have a COA for every size.

**When a size gets its own COA:** move it from `'shared'` into `'coas'` with its real figures.

## Where the code lives

| File | Purpose |
| --- | --- |
| `coa-library.php` | `[fs_coa_library]` shortcode, **all batch data** (`fs_coa_data()`), inline CSS, modal + JS. |
| `functions.php` | `require_once`s the above. |

Page 299 contains only the intro paragraph, `[fs_coa_library]`, and the RUO notice. It used to
use a legacy `[fs_coa_search]` shortcode defined outside the theme; that shortcode is no longer
referenced but the code defining it still prints legacy CSS site-wide (`.fs-coa li{display:flex}`),
which is why this module's CSS carries `!important` overrides.

## Batch 1 — published (16 COAs / 11 products)

All by **Kovera Labs**, certified 07/14/2026, all pass spec (>98% purity).

| Product | Batch | Qty | Purity | Net content |
| --- | --- | --- | --- | --- |
| BPC-157 | FS-BPC-10-0726 | 10 mg | 99.859% | 12.69 mg |
| GHK-Cu | FS-GHK-50-0726 | 50 mg | 99.487% | 49.83 mg |
| GHK-Cu | FS-GHK-100-0726 | 100 mg | 99.501% | 103.51 mg |
| KLOW (blend) | FS-KLOW-80-0726 | 80 mg | 99.471% | 86.98 mg |
| MOTS-c | FS-MOTS-10-0726 | 10 mg | 99.877% | 11.91 mg |
| NAD+ | FS-NAD-1000-0726 | 1000 mg | 99.486% | 981.01 mg |
| RETA-3 | FS-RETA-10-0726 | 10 mg | 99.469% | 10.14 mg |
| RETA-3 | FS-RETA-20-0726 | 20 mg | 99.721% | 21.62 mg |
| RETA-3 | FS-RETA-30-0726 | 30 mg | 99.516% | 33.54 mg |
| Selank | FS-SEL-10-0726 | 10 mg | 99.861% | 10.29 mg |
| Semax | FS-SEM-10-0726 | 10 mg | 99.496% | 9.78 mg |
| TB-500 | FS-TB-10-0726 | 10 mg | 99.277% | 11.79 mg |
| Tesamorelin | FS-TESA-5-0726 | 5 mg | 99.368% | 5.71 mg |
| TIRZ-2 | FS-TIRZ-10-0726 | 10 mg | 99.883% | 10.56 mg |
| TIRZ-2 | FS-TIRZ-20-0726 | 20 mg | 99.714% | 20.61 mg |
| TIRZ-2 | FS-TIRZ-30-0726 | 30 mg | 99.662% | 30.27 mg |

Source PDFs: Drive → `Futuristic Science / COA's / Batch 1`. Uploaded to
`/wp-content/uploads/2026/07/` with original filenames. **Batch 2–5 folders exist but are empty.**

19 products have no COA at all: AHK-Cu, AOD-9604, ARA-290, Cartalax, CJC-1295 w/o DAC,
Epithalon, GLOW, Glutathione, IGF-1LR3, Ipamorelin, KissPeptin-10, KPV, L-Carnitine, LIPO-C,
MT-2, Sermorelin, SS-31, Survodutide, TB/BPC Wolverine.

## Adding the next batch (3 steps)

1. Upload the PDFs to **Media → Add New** (keep original filenames).
2. In `coa-library.php` → `fs_coa_data()`, add an entry to that product's `coas` array
   (copy a line, change `batch`/`qty`/`purity`/`net`/`report`/`code`/`date`/`file`).
   Update `$u` if the upload month changed. Remove any now-redundant `shared` entry.
3. Bump the version in `style.css` + `functions.php`, re-zip the 7 files flat, then
   **Appearance → Themes → Add New → Upload → Replace installed with uploaded**.

## Gotchas

- **The COA CSS is inlined** in the shortcode, not in `style.css`. Deliberate: the host serves
  `style.css` with `Cache-Control: max-age=604800` (7 days) **and** strips WordPress's `?ver=`
  cache-busting, so stylesheet edits don't reach repeat visitors for up to a week. Inlining
  renders correctly immediately. Proper fix (recommended follow-up): version-stamped CSS
  *filenames*.
- The theme's global button rule paints **every** `<button>` gold with `!important`; the COA
  rows and modal buttons are `<button>`s, hence the `.fs-coa button.…{…!important}` resets.
- Page data is transcribed from the PDFs. **The PDF is always the source of truth.**
