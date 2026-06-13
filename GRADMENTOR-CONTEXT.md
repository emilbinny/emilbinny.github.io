# GradMentor Website Rebuild — Context & Design Brief

## Overview
GradMentor (gradmentor.org) is a boutique admissions and career advisory practice founded by Emil Mathew Binny. It is being rebuilt to work in tandem with emilbinny.com — the two sites form a paired ecosystem:

- **emilbinny.com** = credibility hub (scholar-practitioner identity, research, writing). Already rebuilt and live.
- **gradmentor.org** = the storefront (services sold here, money made here, conversion-focused).

The sites should feel visually related — same design language — but GradMentor is sharper on conversion while emilbinny.com is more scholarly.

---

## Design System (must match emilbinny.com exactly)

### Colors
```css
--navy:    #0a1729   /* page background */
--panel:   #0f1f38   /* card/section backgrounds */
--line:    rgba(201,162,75,.22)  /* borders and dividers */
--gold:    #c9a24b   /* primary accent */
--gold-soft: #d9b96e /* gold hover state */
--cream:   #ece7db   /* primary text */
--slate:   #8a97ab   /* secondary/muted text */
```

### Typography
- **Display / headings**: Fraunces (Google Fonts) — `font-weight: 500`, italic for emphasis
- **Body**: Inter (Google Fonts) — `font-weight: 400/500/600`
- **Google Fonts import**:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
```

### Logo
- GradMentor has its own logo/wordmark (not the EB monogram)
- Should feel premium, matching the navy+gold palette
- Suggested: "GradMentor" wordmark in Fraunces, gold color, or a GM monogram badge similar to the EB badge on emilbinny.com

### Buttons
```css
.btn-primary  { background: #c9a24b; color: #0a1729; font-weight: 600 }
.btn-ghost    { border: 1px solid rgba(201,162,75,.22); color: #ece7db }
```

### Nav height: 72px, sticky, backdrop-blur
Nav border-bottom: `2px solid rgba(201,162,75,.4)` — visible gold line
Nav link font-size: `1rem`, font-weight: 500
Logo: 57×57px

---

## Hosting & Tech Stack
- **Static HTML** (same as emilbinny.com)
- GitHub Pages
- Cloudflare DNS
- Formspree for contact forms (form ID: mkoybyoe — same account, can create a new form)
- Calendly embed for booking calls
- Single-file HTML pages (no build tools, no frameworks)
- Push via terminal: `git add . && git commit -m "..." && git push origin main`

---

## Strategic Positioning

### What GradMentor IS
A boutique admissions and career advisory firm. Premium, selective, founder-led.

### What it is NOT
- A freelancer marketplace
- A cheap test-prep service
- Emil's personal consulting page (that's emilbinny.com)

### Positioning statement
"Not a platform. Not a freelancer. A boutique firm with a curated expert network, where Emil Mathew Binny personally handles MBA and Business PhD strategy."

### Target personas
1. **MBA aspirant** — working professional, 3–7 years experience, targeting M7 or top-20 global programs
2. **MS applicant** — recent graduate or early career, STEM or business, targeting US/UK programs
3. **PhD applicant** — wants academic career, needs SOP + research fit strategy
4. **Medical/other** — secondary persona, handled by network advisors

### Tone
Confident, direct, premium. No superlatives ("best," "top," "world-class"). No fluffy promises. Specificity over hype.

---

## Services (current, confirmed)
- MBA Admissions Advisory (Emil handles personally)
- Business PhD Strategy (Emil handles personally)
- MS Admissions
- Medical Admissions (MBBS, MD programs)
- Interview Preparation
- Resume & LinkedIn Review
- Career Pivots & Transitions
- Essay & SOP Strategy

---

## The Advisor Network Problem — Critical Context
The site previously showed 4 "Advisor Onboarding — Coming Soon" cards, which visibly contradicted the "Premium Firm, Not a Freelancer" claim. Emil has details of real advisors to add.

**Decision made:** Reposition from "established firm" to "boutique, founder-led, selective" — which is honest and still premium. Remove all "Coming Soon" placeholders. Either show real advisors (if Emil provides their details) or frame it as a curated-on-request model.

**Ask Emil at the start of the rebuild chat:** "Do you have advisor names, bios, and credentials to add? If yes, share them and I'll build advisor cards. If not, I'll use the 'curated expert network, matched to your profile' framing instead."

---

## The emilbinny.com ↔ GradMentor handoff

### GradMentor → emilbinny.com
- Emil's bio on GradMentor should link to emilbinny.com as proof/credibility
- Bio text: "Emil Mathew Binny is an incoming PhD candidate in International Business & Strategy at Rutgers Business School (Fall 2026), with an MBA from Rice University and an MA in Applied Economics from JNU. He has conducted 250+ candidate evaluations and brings practitioner experience across corporate finance, pricing strategy, and institutional research."
- Link: "Learn more about Emil →" pointing to https://emilbinny.com/about.html

### emilbinny.com → GradMentor
- Homepage has a handoff band: "Looking for guidance, not research? I work with applicants through GradMentor."
- Button: "Visit GradMentor ↗" → https://gradmentor.org
- Nav has persistent "GradMentor ↗" link (gold, bordered)

---

## Pages to Build (suggested)
1. **Home** — hero, what GradMentor is, services overview, Emil bio + credibility, testimonials, CTA to book
2. **Services** — individual service pages or one page with anchors
3. **About / The Firm** — Emil's story, the advisor model, why boutique
4. **Results / Testimonials** — admits, outcomes, anonymized if needed
5. **Book a Call** — Calendly embed + what to expect
6. **Blog/Resources** — optional, can link to emilbinny.com writing

---

## Credibility Signals to Feature
- 250+ candidate evaluations (Rice MBA Admissions Ambassador)
- Incoming PhD, Rutgers Business School (funded)
- MBA, Rice University (Jones Graduate School)
- MA Applied Economics, JNU
- Corporate: Neste (Houston), Sasol, Toshiba, VAS Carbons
- Research: Kerala State Planning Board, Coffee Board of India (with King's College London, Gulati Institute faculty)
- Teaching: Assistant Professor, Bharata Mata College Kochi; Subject Expert, St Joseph's College Mysore
- Political Strategy Research (quantitative, no party/person mention)
- Founder: Agri Nova Cold Chain Solutions

---

## Testimonials / Social Proof
- Use anonymized testimonials if real names aren't available
- Format: outcome first ("Admitted to [Program] at [School]"), then quote
- Ask Emil at start of rebuild: "Do you have real testimonials to include? Names, outcomes, quotes?"

---

## Contact / Booking
- Primary CTA: "Book a Free 30-Minute Discovery Call" → Calendly embed
- Secondary: Contact form (Formspree, create new form for GradMentor)
- Email to display: contact@gradmentor.org or similar (ask Emil)

---

## What NOT to do
- Do not replicate the personal "hire me" framing — GradMentor is the entity
- Do not use "Coming Soon" anywhere
- Do not claim a large team that doesn't exist
- Do not use generic stock-photo MBA campus imagery in copy
- Do not make Emil's personal F-1/consulting situation visible — all paid work routes through GradMentor entity
- Do not add a personal "Book Emil" CTA — it's "Book a GradMentor call"

---

## Files Reference (emilbinny.com)
All built as static single-file HTML. Shared stylesheet at `/style.css`. Blog posts in `/blog/`. 
The design system above is the authoritative reference — use it for GradMentor too, so both sites feel like siblings.

---

## First Questions to Ask Emil Before Building
1. Do you have real advisor names/bios/credentials to add?
2. Do you have real testimonials (names, outcomes, quotes)? Or should I write anonymized ones?
3. What email address should GradMentor display / receive form submissions?
4. Do you have a Calendly link ready?
5. What is the GitHub repo for gradmentor.org?
6. Any specific pages you want beyond Home, Services, About, Book?
