---
name: new-buyer
description: >
  Handle incoming Real Estate Buyer Questionnaire leads for Leonel Cortes / LC Real Estate LLC.
  Use this skill ANY TIME Leonel gets a new buyer questionnaire submission in his email, or asks
  to process a new buyer lead. Triggers on: "new buyer", "buyer questionnaire", "buyer lead",
  "new lead from my buyer form", "Leonel's Real Estate Questionnaire / Buyer", or when the user
  forwards/pastes a Jotform email whose subject contains "Real Estate Questionnaire / Buyer" or
  "Real Estate Buyer Questionnaire". Executes a full buyer-lead workflow: extract every
  questionnaire field → build a clean readout → log the lead everywhere (MLS prospect,
  Google Contacts, and the Lead Tracker Google Sheet) → forward the lead to the lender for
  pre-approval → draft a personalized outreach text to the buyer.
user-invocable: true
---

# New Buyer Questionnaire Workflow — LC Real Estate

## Overview

When Leonel receives a **Buyer Questionnaire** submission (from his Jotform buyer form,
"**Leonel's Real Estate Questionnaire / Buyer**", form ID `251486534442156`), this skill:

1. Extracts every field from the submission into a clean, scannable readout.
2. **Logs the lead in every place it belongs** — MLS (Paragon prospect + saved search),
   Google Contacts, and the **Lead Tracker** Google Sheet.
3. Forwards the lead to Leonel's lender for pre-approval.
4. Drafts a personalized first-contact text message to the buyer.

Leonel reviews everything before anything is sent. Claude prepares; Leonel sends.

> Note: Leonel previously used an older form titled "Real Estate Buyer Questionnaire."
> The current, active form is "**Leonel's Real Estate Questionnaire / Buyer**." Handle
> submissions from either title the same way — the fields below cover both.

---

## The Buyer Questionnaire — Job Form Fields

These are the questions on the buyer questionnaire. Extract each one that is present
(some submissions omit fields, and some include a second buyer). Present them in this order:

| # | Field | Notes |
|---|-------|-------|
| 1 | **Name** | Primary buyer's full name |
| 2 | **2nd Buyer's Name** | Co-buyer, if present |
| 3 | **Phone Number** | Primary buyer |
| 4 | **2nd Buyer's Phone Number** | Co-buyer, if present |
| 5 | **Email** | Primary buyer |
| 6 | **2nd Buyer's Email** | Co-buyer, if present |
| 7 | **When are you looking to buy?** | Timeline (e.g. 1-3 Months, 3-6 Months) |
| 8 | **What price range are you looking in?** | e.g. $100k - $150k |
| 9 | **Are you Pre-Approved** | Yes / No |
| 10 | **On a Scale 1-5 How high is your desire to purchase a home?** | Motivation score |
| 11 | **How many bedrooms do you want?** | |
| 12 | **How many bathrooms do you want?** | |
| 13 | **Minimum # of Car Storage** | e.g. 1+ |
| 14 | **Basement Preference** | |
| 15 | **What areas are you wanting to live in?** | Target city/neighborhoods |
| 16 | **Do you rent or own your current residence?** | e.g. Rent / Own / Living with Family |
| 17 | **Do you need to sell your home to buy?** | Yes / No |
| 18 | **Do you have kids? If so, how many?** | |
| 19 | **Anything you would like to add that will help me with your property search?** | Free-text notes |

---

## Step 1 — Find / Extract the Submission

If Leonel pasted or forwarded the email, extract directly from it.

Otherwise, use the **Gmail** tool to find the most recent submission. Search:

```
subject:("Real Estate Questionnaire / Buyer" OR "Real Estate Buyer Questionnaire") from:noreply@jotform.com
```

Pull the most recent **unread** one unless Leonel specifies a name. Fetch the full
message body to read every field (the notification lists all answered questions).

---

## Step 2 — Build the Readout

Present the extracted lead in a clean block Leonel can scan at a glance. Skip fields the
buyer left blank. Example format:

```
🏡 NEW BUYER LEAD — [Full Name]

Contact
- Phone: (XXX) XXX-XXXX
- Email: name@example.com
- Co-buyer: [name / phone / email, if any]

Buying Profile
- Timeline: 3-6 Months
- Price range: $100k - $150k
- Pre-approved: Yes
- Desire to buy (1-5): 5 / 5
- Needs to sell first: No
- Current residence: Living with Family

Wants
- Beds / Baths: 3 / 2
- Car storage: 1+
- Basement: Yes (not a deal breaker)
- Areas: Green Bay
- Kids: 2
- Notes: Fenced yard
```

Flag hot leads: **pre-approved + desire 4-5 + timeline ≤ 3 months** → call these out as
"🔥 Priority — reach out today."

---

## Step 3 — Log the Lead Everywhere (MLS · Google Contacts · Lead Tracker)

Every new buyer gets recorded in all three places so nothing slips through the cracks. Use
the **Claude in Chrome** browser tool for the destinations that have no direct API
(same pattern as the Forewarn lookup in the `sold-com-referral` skill). Confirm each entry
with Leonel as you go, or batch them and confirm once — ask his preference if unsure.

### 3a — MLS (RANW Paragon) — add as a Buyer Prospect + Saved Search
Log in to Paragon and set the buyer up so listings auto-flow to them:
1. Go to **Contacts → Add Contact** and create the buyer (name, phone, email).
2. Tag/type the contact as a **Buyer / Prospect**.
3. Create a **Saved Search / Auto-Email (Prospect)** matching their criteria:
   - **Area(s):** from "What areas are you wanting to live in?" (e.g. Green Bay)
   - **Price:** from their price range (e.g. $100k – $150k)
   - **Beds:** ≥ requested (e.g. 3+)
   - **Baths:** ≥ requested (e.g. 2+)
   - **Garage / car storage:** ≥ requested (e.g. 1+)
   - **Basement:** apply if it's a stated preference (soft filter if "not a deal breaker")
4. Set the auto-email to notify the buyer of new/updated matches. Confirm the schedule
   (e.g. ASAP/daily) with Leonel.

### 3b — Google Contacts — create the contact
Create a new Google contact for the buyer:
- **Name**, **Phone**, **Email** (and the co-buyer as a separate/linked contact if present)
- **Label:** `Buyer Lead` (and/or `Real Estate`)
- **Notes:** timeline, price range, beds/baths, target area, pre-approval status, source
  ("Buyer Questionnaire")
- Company/where-met optional: `LC Real Estate — Buyer Questionnaire`

> There's also a **"Google Contacts"** spreadsheet in Leonel's Drive that mirrors his
> contacts — if he keeps that in sync, add a matching row there too.

### 3c — Lead Tracker (Google Sheet) — append a row
Add the buyer as a new row in the **Lead Tracker** sheet
(`Lead Tracker`, file ID `1gdj9EgMDEdGUGsf4VrfPOY2atyzETK1u4gc1g3aOXqY`). Match the existing
columns in order:

| Column | Value for a buyer questionnaire lead |
|---|---|
| Rating | A / B / C — A if pre-approved + desire 4-5 + timeline ≤ 3 mo |
| Agent | Leonel Cortes |
| Client Name | Buyer's full name |
| Client Phone # | Buyer's phone |
| Client Email | Buyer's email |
| Lead Date | Date the questionnaire came in |
| First Contact Date | Fill when Leonel first reaches out |
| Next Scheduled Touch | Set a follow-up date |
| Client Type | `Buyer` |
| Source | `Buyer Questionnaire` |
| Property Type | `Residential` (default) |
| Property Value | Target price (use top of their range, e.g. $150,000) |
| Potential Revenue Value | ≈ 3% of property value |
| Added to CRM | `Yes` once 3a/3b are done |
| Probability | From pre-approval + desire (e.g. Yes + 5/5 → 80-90%) |
| Status | `New Lead` |
| Win / Loss | leave blank |
| Notes | Beds/baths, area, timeline, "needs to sell?", kids, free-text notes |

> No Google Sheets API tool is connected in this environment, so append the row via the
> **Claude in Chrome** browser tool (open the sheet and add the row), the same way the MLS
> and Contacts steps work. If Leonel prefers, present the row values for him to paste.

---

## Step 4 — Forward the Lead to the Lender

Leonel routes buyer leads to his lender for pre-approval / financing. Prepare a
**forward** of the original Jotform email to the lender.

- **Lender:** Michelle Clark — `michelleclark@yourepiclender.com` (Epic Lending)
- **Default note (top of the forward):** `Got a lead for you.`
- Add a one-line context note when useful (e.g. "He works 2nd shift, needs a pre-approval —
  shoot him a text when you have time.").
- If the buyer is **already pre-approved**, say so in the note so Michelle knows the stage
  (e.g. "Says he's already pre-approved — can you confirm?").

Show the draft forward to Leonel and confirm the recipient before sending. Use the Gmail
tool to create the draft/forward; do not send without Leonel's OK.

---

## Step 5 — Determine Language

Check the buyer's name and notes for language clues.
- Spanish-speaking lead → Spanish outreach text.
- Default → English.

---

## Step 6 — Draft Buyer Outreach Text

Personalize with the buyer's first name, target area, timeline, and anything notable from
their notes.

### English Template
```
Hey [First Name]! This is Leonel Cortes, your local REALTOR® here in [Area].

Thanks for filling out my buyer questionnaire — sounds like you're looking for a
[beds]bd/[baths]ba around [Area] in the [price range] range. I'd love to help you find it.

[If not pre-approved:] First step is getting you pre-approved so we know your exact budget —
I work with a great lender who can get that started fast.
[If pre-approved:] Great news that you're already pre-approved — that puts you ahead of the game.

When's a good time for a quick call this week?

– Leonel Cortes | LC Real Estate, powered by Fathom Realty
📱 920-265-0862
```

### Spanish Template
```
¡Hola [Nombre]! Soy Leonel Cortés, tu REALTOR® local aquí en [Área].

Gracias por llenar mi cuestionario de comprador — veo que buscas una casa de
[recámaras] recámaras y [baños] baños por [área] en el rango de [precio]. Me encantaría ayudarte.

[Si no está pre-aprobado:] El primer paso es conseguir tu pre-aprobación para saber tu
presupuesto exacto — trabajo con un excelente prestamista que lo puede iniciar rápido.
[Si está pre-aprobado:] ¡Qué buena noticia que ya estás pre-aprobado! Eso te pone por delante.

¿Cuándo tienes un momento para una llamada rápida esta semana?

– Leonel Cortés | LC Real Estate, powered by Fathom Realty
📱 920-265-0862
```

---

## Step 7 — Present & Confirm

Show Leonel:
1. The lead readout (Step 2).
2. Where the lead was logged — MLS prospect, Google Contacts, Lead Tracker row (Step 3).
3. The forward-to-lender draft (Step 4).
4. The buyer outreach text (Step 6).

Ask: **"Ready to log this everywhere, forward it to Michelle, and text [First Name] at [phone]?"**

Once confirmed:
- Save the MLS prospect + saved search, Google contact, and Lead Tracker row.
- Send/queue the forward to Michelle Clark.
- Copy the outreach text for Leonel to send, or open the SMS with the number pre-filled.

---

## Buyer Questionnaire Link (to share with prospects)

If Leonel wants to send the questionnaire to a new prospective buyer:
`https://form.jotform.com/251486534442156`

---

## Edge Cases

| Situation | Action |
|---|---|
| Second buyer / co-buyer on the form | Capture both names, phones, emails; address the primary in the text |
| Buyer not pre-approved | Emphasize the pre-approval step; the lender forward is the priority |
| Buyer already pre-approved | Note it for Michelle; move faster toward showings |
| "Do you need to sell your home to buy?" = Yes | Flag it — this is also a potential listing; consider the seller workflow |
| Spanish-speaking lead | Use the Spanish template automatically |
| Multiple submissions in the inbox | Process the newest unread first; handle others sequentially if asked |
| Phone missing from the form | Look it up via Forewarn (see the sold-com-referral skill's Forewarn steps) |

---

## Summary Checklist

- [ ] Submission found / pasted
- [ ] All questionnaire fields extracted
- [ ] Readout built (hot lead flagged if applicable)
- [ ] Logged in MLS (Paragon prospect + saved search / auto-email)
- [ ] Added to Google Contacts (label: Buyer Lead)
- [ ] Row appended to Lead Tracker Google Sheet
- [ ] Forward-to-lender draft prepared (Michelle Clark)
- [ ] Language determined (EN/ES)
- [ ] Buyer outreach text drafted and personalized
- [ ] Leonel reviewed and confirmed
- [ ] Lead logged everywhere + forwarded + outreach sent/copied

---

## Leonel's Contact Info (for signatures)

**Leonel Cortes | Realtor, LC Real Estate, powered by Fathom Realty**
Phone: 920-265-0862
Email: LeonelCortesRealEstate@gmail.com

**Lender:** Michelle Clark — michelleclark@yourepiclender.com (Epic Lending)
