# COA Library — how it works & how to add the next batch

**Live at** https://futuristicscienceusa.com/coa-library/ (deployed 2026-07-14, theme v1.9.5)

## What it does

The COA Library page lists all 30 products. Products that have a published Certificate of
Analysis show a **batch count + "COA verified"** badge and **expand on click** to reveal that
batch's real lab results (purity, net content, LC-MS identity, certification date) and a
gold **View COA (PDF)** button. Products without a COA keep the original "Request COA" mailto.
The search box filters by **product name or batch/report number** (e.g. `FS-TIRZ-20`).

## Where the code lives

| File | Purpose |
| --- | --- |
| `coa-library.php` | The `[fs_coa_library]` shortcode + **all batch data** (`fs_coa_data()`). |
| `functions.php` | `require_once`s the above. |

The COA Library **page** (post ID 299) contains only the intro paragraph, the
`[fs_coa_library]` shortcode, and the RUO notice. It previously used a legacy
`[fs_coa_search]` shortcode (defined outside the theme) — that shortcode is no longer
referenced, but the code that defines it still prints some legacy CSS site-wide
(`.fs-coa li{display:flex}`), which is why the module's CSS carries `!important` overrides.

## Batch 1 — what's published (16 COAs across 11 products)

All tested by **Kovera Labs**, certified 07/14/2026, all pass spec (>98% purity).

| Product | Batch | Qty | Purity | Net content |
| --- | --- | --- | --- | --- |
| BPC-157 | FS-BPC-10-0726 | 10 mg | 99.859% | 12.69 mg |
| GHK-Cu | FS-GHK-50-0726 | 50 mg | 99.487% | 49.83 mg |
| GHK-Cu | FS-GHK-100-0726 | 100 mg | 99.501% | 103.51 mg |
| KLOW (blend) | FS-KLOW-80-0726 | 80 mg | 99.471% | 86.98 mg |
| MOTS-c | FS-MOTS-10-0726 | 10 mg | 99.877% | 11.91 mg |
| NAD+ | FS-NAD-1000-0726 | 1000 mg | 99.486% | 981.01 mg |
| RETA-3 (Retatrutide) | FS-RETA-10-0726 | 10 mg | 99.469% | 10.14 mg |
| RETA-3 (Retatrutide) | FS-RETA-20-0726 | 20 mg | 99.721% | 21.62 mg |
| RETA-3 (Retatrutide) | FS-RETA-30-0726 | 30 mg | 99.516% | 33.54 mg |
| Selank | FS-SEL-10-0726 | 10 mg | 99.861% | 10.29 mg |
| Semax | FS-SEM-10-0726 | 10 mg | 99.496% | 9.78 mg |
| TB-500 | FS-TB-10-0726 | 10 mg | 99.277% | 11.79 mg |
| Tesamorelin | FS-TESA-5-0726 | 5 mg | 99.368% | 5.71 mg |
| TIRZ-2 (Tirzepatide) | FS-TIRZ-10-0726 | 10 mg | 99.883% | 10.56 mg |
| TIRZ-2 (Tirzepatide) | FS-TIRZ-20-0726 | 20 mg | 99.714% | 20.61 mg |
| TIRZ-2 (Tirzepatide) | FS-TIRZ-30-0726 | 30 mg | 99.662% | 30.27 mg |

Source PDFs: Google Drive → `Futuristic Science / COA's / Batch 1`.
Uploaded to WP Media Library at `/wp-content/uploads/2026/07/` with original filenames.

**19 products still have no COA** (AHK-Cu, AOD-9604, ARA-290, Cartalax, CJC-1295 w/o DAC,
Epithalon, GLOW, Glutathione, IGF-1LR3, Ipamorelin, KissPeptin-10, KPV, L-Carnitine, LIPO-C,
MT-2, Sermorelin, SS-31, Survodutide, TB/BPC Wolverine) — they show "Request COA".
Drive folders **Batch 2–5 exist but are empty.**

## Adding the next batch (3 steps)

1. Upload the new COA PDFs to **Media → Add New** (keep the original filenames).
2. In `coa-library.php`, find the product in `fs_coa_data()` and add an entry to its `coas`
   array — copy an existing line and change `batch`, `qty`, `purity`, `net`, `report`,
   `code`, `date`, `file`. (For a product that had none, replace `'coas' => array()`.)
   Update `$u` if the upload month changes (e.g. `/wp-content/uploads/2026/08/`).
3. Bump the version in `style.css` + `functions.php`, re-zip, upload via
   **Appearance → Themes → Add New → Upload → Replace installed with uploaded**.

## Gotchas worth knowing

- **The COA CSS is inlined** in the shortcode output, not in `style.css`. This is deliberate:
  the host serves `style.css` with `Cache-Control: max-age=604800` (7 days) **and** strips
  WordPress's `?ver=` cache-busting query string, so stylesheet edits don't reach repeat
  visitors for up to a week. Inlining guarantees the COA page renders correctly immediately.
  Fixing this properly (version-stamped CSS *filenames*) is a recommended follow-up.
- The theme's global button rule paints **every** `<button>` gold with `!important`; the COA
  row is a `<button>`, hence the `.fs-coa button.fs-coa-row{...!important}` resets.
- Data shown on the page is transcribed from the PDFs. The PDF is always the source of truth.
