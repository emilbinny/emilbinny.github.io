# emilbinny.com — Complete Site Documentation
**Last updated:** June 2026  
**Live URL:** https://emilbinny.com  
**GitHub repo:** https://github.com/emilbinny/emilbinny.github.io  
**Hosting:** GitHub Pages + Cloudflare DNS  

---

## 1. Site Purpose & Strategy

emilbinny.com is a **credibility and identity hub** — not a services storefront.

**Primary jobs:**
- Establish Emil as a scholar-practitioner (incoming PhD, research identity, writing)
- Route anyone wanting admissions/career services to GradMentor (gradmentor.org)
- Build long-term academic job-market credibility

**What it deliberately does NOT do:**
- Sell services directly under Emil's personal name (F-1 visa considerations)
- Compete with GradMentor
- Book clients personally ("Book Emil" CTAs are absent)

**Relationship with GradMentor:**
- emilbinny.com → GradMentor: handoff band on homepage + persistent nav link
- GradMentor → emilbinny.com: Emil's bio there links back here for credibility proof

---

## 2. Tech Stack

| Item | Detail |
|---|---|
| Hosting | GitHub Pages |
| DNS / CDN | Cloudflare |
| Domain | emilbinny.com |
| Build system | None — pure static HTML/CSS |
| Contact forms | Formspree (form ID: `mkoybyoe`, submits to emil.binny@gmail.com) |
| Analytics | Google Analytics GA4 (paste gtag snippet before `</body>` in index.html) |
| Fonts | Google Fonts — Fraunces + Inter |
| Booking | Not on emilbinny.com (lives on GradMentor) |

**To push changes:**
```bash
cd ~/Desktop/emilbinny.github.io
git add .
git commit -m "describe change here"
git push origin main
```
GitHub Pages redeploys in ~60 seconds via Cloudflare.

---

## 3. File Structure

```
emilbinny.github.io/
├── index.html          ← Homepage
├── about.html          ← Bio, education, experience timeline, leadership, skills
├── research.html       ← Research statement, 3 themes, papers list, methods, certs
├── writing.html        ← Blog index with category filter
├── contact.html        ← Formspree form + GradMentor routing card
├── style.css           ← Shared design system (ALL pages link this)
├── logo.svg            ← EB logo (42×42, navy background, gold gradient text)
├── headshot.jpg        ← Portrait photo (used on about.html)
├── sitemap.xml         ← Google sitemap (update when adding new pages)
├── robots.txt          ← Allow all crawlers, points to sitemap
└── blog/
    ├── blog-style.css              ← Shared blog article styles
    ├── TEMPLATE.html               ← Blank template for new posts
    ├── 250-interviews.html
    ├── trust-accountability-fintech.html
    ├── rules-of-the-game.html
    ├── pricing-market-theory.html
    ├── phd-decision.html
    └── sop-advice-wrong.html
```

---

## 4. Design System

### Colors
```css
--navy:      #0a1729          /* page background */
--panel:     #0f1f38          /* card / section backgrounds */
--line:      rgba(201,162,75,.22)  /* all borders and dividers */
--gold:      #c9a24b          /* primary accent */
--gold-soft: #d9b96e          /* gold hover */
--cream:     #ece7db          /* primary text */
--slate:     #8a97ab          /* secondary / muted text */
```

### Typography
```css
--serif: "Fraunces", Georgia, serif   /* headings, display text, pull quotes */
--sans:  "Inter", system-ui, sans-serif  /* body, nav, labels */
```

Google Fonts import (in every page `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
```

### Logo
File: `logo.svg` — 42×42 SVG, navy rounded square, gold gradient EB letterform.  
Used in nav as: `<img src="/logo.svg" alt="EB" class="logo-img"/>` (height/width: 38px via CSS).

### Buttons
```css
.btn-primary  { background: #c9a24b; color: #0a1729; font-weight: 600 }
.btn-ghost    { border: 1px solid var(--line); color: var(--cream) }
```

### Social Icons
Compact 32×32 SVG icon buttons. Present on homepage hero (LinkedIn, X, Instagram).  
All footers have text links: LinkedIn · X · Instagram · Email.

---

## 5. Page-by-Page Reference

### index.html (Homepage)
**Sections in order:**
1. Nav (sticky, logo + links + GradMentor↗)
2. Hero — eyebrow in `eyebrow-lg` class (larger than standard), H1 with italic gold emphasis, lede paragraph, two CTAs, social icon row (LinkedIn/X/Instagram)
3. Credentials strip — 3-column: PhD Rutgers / MBA Rice / MA JNU
4. Research section — left: "The question I keep returning to" statement; right: numbered index (01 Institutional, 02 Behavioral, 03 Quantitative)
5. Practice section (dark panel) — 6-item role grid, 2 columns
6. Writing section — 3 blog preview cards linking to actual posts
7. GradMentor handoff band
8. Footer

**Key classes:** `.eyebrow-lg` for the tagline (larger tracking), `.research-grid` (2-col), `.roles` (2-col grid), `.posts` (3-col grid)

### about.html
**Sections in order:**
1. Nav
2. About hero — 2-col grid: left = bio text, right = sticky portrait card
3. Education section (dark panel) — 3-col: PhD / MBA / MA
4. Experience timeline — full chronological list with gold year labels
5. Leadership section — 2-col grid (Rice roles)
6. Methods & Tools — 4-col skill chips
7. CV request bar
8. Footer

**Experience timeline entries (in order):**
- 2026 → PhD Candidate — Rutgers Business School
- 2024–25 — Political Strategy Researcher (no party/person mention)
- 2024– — Founder — GradMentor
- 2024 — Credit & Risk Analyst — Neste, Houston TX
- 2023–24 — Strategy Consultant — Sasol & Toshiba
- 2021 — Subject Expert — St Joseph's College, Mysore (Economics)
- 2020–22 — Head of Pricing & Strategy — VAS Carbons
- 2018–20 — Pricing Analyst — VAS Carbons
- 2019–20 — Assistant Professor of Economics — Bharata Mata College, Kochi (NAAC accreditation team and peer team attache; 180+ students)
- 2019 — Research Assistant — Kerala State Planning Board (with Prof. Jayaseelan Raj, King's College London)
- 2018 — Research Assistant — Coffee Board of India (with Prof. K.J. Joseph, Gulati Institute)

**Leadership entries:**
- President — Indian Students Association (Rice, 2023–24)
- VP Community Engagement — Graduate Students Association (Rice, 2023–24, $200K budget)
- Admissions Ambassador (Rice, 2022–24, 250 evaluations)
- Class Representative (Rice MBA, 2022–23)

**What's intentionally excluded:** Adjunct Faculty role (removed; F-1 considerations + not core identity)

### research.html
**Sections in order:**
1. Nav
2. Research hero — H1 with the core research question, full statement block (panel card)
3. Three research themes — 3-col cards: 01 Institutional / 02 Behavioral / 03 Quantitative
4. Papers list (dark panel) — tagged with status pills
5. Methods & training — 4-card grid
6. Certifications — 2-col grid

**Paper status tags:**
- `tag-progress` (gold) — In Progress
- `tag-presented` (green) — Presented
- `tag-policy` (blue) — Policy Report

**Papers listed:**
- Strategic Behavior and Electoral Competition (In Progress)
- Innovation and Institutional Adaptation in Agri-Value Chains (In Progress)
- Pricing and Competitive Dynamics in Specialty Carbons (In Progress)
- Economic Vulnerability and Rural Distress / Farmer Suicides in Vidarbha (Presented, UGC)
- Economic Impact of Male Migration on Women Left Behind in Kerala (Presented, UGC)
- Industrial Competitiveness in Indian Tyre Sector (MA Research, JNU/CDS)
- Post-Disaster Economic Recovery / Kerala Floods (Policy Report, with King's College London)
- Competitiveness in India's Coffee Sector (Policy Report, with Gulati Institute)

### writing.html (Blog Index)
**Features:**
- Filter buttons: All / Strategy / Fintech & AI / Admissions / Economics
- JavaScript filter (client-side, no server needed)
- Featured card (full-width) for the 250-interviews piece
- 5 regular cards
- Newsletter signup section at bottom (currently cosmetic — wire up if needed)

**All 6 posts with their slugs and categories:**

| File | Category | Title |
|---|---|---|
| `blog/250-interviews.html` | admissions | What 250 interviews taught me about judging potential |
| `blog/trust-accountability-fintech.html` | fintech | The trust and accountability layer in fintech AI |
| `blog/rules-of-the-game.html` | strategy | When the rules of the game move |
| `blog/pricing-market-theory.html` | economics | What pricing taught me about market theory |
| `blog/phd-decision.html` | strategy | The PhD decision: a strategy framework for a life choice |
| `blog/sop-advice-wrong.html` | admissions | Why most SOP advice is wrong |

**Available categories (data-cat values):**
- `strategy` — blue-slate
- `business` — green
- `fintech` — teal
- `admissions` — purple
- `economics` — warm gold
- `politics` — muted red
- `movies` — lavender
- `culture` — amber

### contact.html
**Sections:**
1. Left col — 4 reason-to-contact cards + direct contact links + GradMentor routing card
2. Right col — Formspree form panel

**Form config:**
- Action: `https://formspree.io/f/mkoybyoe`
- Reply-to: `emil.binny@gmail.com`
- Display email: `emil@emilbinny.com`
- Fields: name, email, topic (dropdown), message
- Honeypot: `_gotcha` hidden field (spam protection)

---

## 6. Blog Architecture (Detailed)

### How it works
The blog is a flat-file system — no database, no CMS, no build step. Each post is a standalone `.html` file in the `/blog/` directory. The writing.html page is a manually maintained index.

### Shared files
- `/style.css` — global design tokens (colors, nav, footer, buttons, social icons)
- `/blog/blog-style.css` — article-specific styles (article hero, body typography, blockquotes, pull quotes, tag pills, related posts grid)

### Every blog post page structure
```html
<head>
  <!-- meta tags: title, description, canonical, OG tags -->
  <link rel="stylesheet" href="/style.css"/>
  <link rel="stylesheet" href="/blog/blog-style.css"/>
</head>
<body>
  <header> <!-- identical nav on every page --> </header>
  <main>
    <article>
      <div class="wrap">
        <div class="article-hero">
          <!-- "← Back to Writing" link -->
          <!-- H1 title -->
          <!-- article-meta: tag pill + author + date + read time -->
        </div>
        <div class="article-body">
          <!-- article content: <p> <h2> <h3> <strong> <em> <blockquote> <hr/> -->
        </div>
        <div class="article-end">
          <!-- author bio line with GradMentor link -->
        </div>
      </div>
    </article>
  </main>
  <footer> <!-- identical footer on every page --> </footer>
</body>
```

### Tag pill classes
```html
<span class="tag-pill tag-admissions">Admissions</span>   <!-- purple -->
<span class="tag-pill tag-strategy">Strategy</span>       <!-- blue-slate -->
<span class="tag-pill tag-business">Business</span>       <!-- green -->
<span class="tag-pill tag-fintech">Fintech & AI</span>    <!-- teal -->
<span class="tag-pill tag-economics">Economics</span>     <!-- warm gold -->
<span class="tag-pill tag-politics">Politics</span>       <!-- muted red -->
<span class="tag-pill tag-movies">Movies</span>           <!-- lavender -->
<span class="tag-pill tag-culture">Culture</span>         <!-- amber -->
```

### Category filter (writing.html)
Each post card has `data-cat="category"`. The JS filter reads this and shows/hides:
```html
<div class="post-card" data-cat="strategy"> ... </div>
```
Filter buttons have `data-filter="strategy"`. The JS:
```js
document.querySelectorAll('.filter-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
    var f = btn.dataset.filter;
    document.querySelectorAll('.post-card').forEach(function(card){
      card.style.display = (f==='all' || card.dataset.cat===f) ? '' : 'none';
    });
  });
});
```

---

## 7. How to Publish a New Blog Post

### Step 1 — Create the HTML file
Copy `blog/TEMPLATE.html` and rename it. Use a short, descriptive slug:
```
blog/my-new-post-title.html
```

### Step 2 — Fill in the template
Replace all placeholder text:
- `<title>` and `<meta name="description">`
- `<link rel="canonical">` with the full URL
- H1 title
- Tag pill class and label
- Date and estimated read time
- Article body (use `<p>`, `<h2>`, `<h3>`, `<strong>`, `<blockquote>`, `<hr/>`)
- Author bio line at the bottom

### Step 3 — Add a card to writing.html
Open `writing.html` and add a new card inside the `.posts-grid` div:
```html
<a href="/blog/my-new-post-title.html" class="post-card" data-cat="strategy" style="text-decoration:none;color:inherit">
  <span class="tag-pill tag-strategy">Strategy</span>
  <h3>Your Post Title</h3>
  <p>One or two sentence description of the post.</p>
  <span class="read">Read →</span>
</a>
```
Replace `data-cat` and tag pill with the correct category.

### Step 4 — Update sitemap.xml
Add a new `<url>` entry:
```xml
<url>
  <loc>https://emilbinny.com/blog/my-new-post-title.html</loc>
  <priority>0.8</priority>
  <changefreq>yearly</changefreq>
</url>
```

### Step 5 — Push
```bash
cd ~/Desktop/emilbinny.github.io
git add blog/my-new-post-title.html writing.html sitemap.xml
git commit -m "New post: Your Post Title"
git push origin main
```

### Alternative: Write in Claude, get HTML back
Write the post in a Claude chat. Paste the text and say "format this as a blog post for emilbinny.com using the site's design system." Claude will return a ready-to-push HTML file. Drop it in `/blog/`, update `writing.html` and `sitemap.xml`, and push.

---

## 8. Updating Existing Pages

### Adding a new experience to about.html
Find the `.timeline` div. Add a `.tl-item` in correct chronological position:
```html
<div class="tl-item">
  <span class="tl-yr">2027</span>
  <div>
    <h3>Role Title — Organisation</h3>
    <p>One or two sentence description.</p>
  </div>
</div>
```

### Adding a new paper to research.html
Find the `.papers-list` div. Add a `.paper` block:
```html
<div class="paper">
  <div class="paper-meta">
    <span class="paper-tag tag-progress">In Progress</span>
  </div>
  <h3>Paper Title</h3>
  <p>Abstract / description.</p>
  <p class="collab">With Prof. Name, Institution.</p>  <!-- optional -->
</div>
```

### Changing contact email
Two places in contact.html:
1. `<input type="hidden" name="_replyto" value="emil.binny@gmail.com"/>`
2. The displayed `href="mailto:emil@emilbinny.com"` link

---

## 9. SEO Setup

### What's done
- `sitemap.xml` at root — lists all pages including blog posts
- `robots.txt` — allows all crawlers, points to sitemap
- Each page has unique `<title>`, `<meta name="description">`, `<link rel="canonical">`
- OG tags on homepage and blog posts

### What still needs doing
1. **Google Search Console** — not yet set up as of build date
   - Go to search.google.com/search-console
   - Add property → Domain → emilbinny.com
   - Verify via Cloudflare DNS TXT record
   - Submit sitemap: `https://emilbinny.com/sitemap.xml`

2. **Google Analytics** — GA4 already set up on account; paste the `gtag` snippet before `</body>` in `index.html` (and any other pages you want tracked)

3. **og-image.jpg** — add a 1200×630 JPG at root for social link previews

---

## 10. Known Issues / To-Do

| Item | Status | Notes |
|---|---|---|
| Google Search Console | Not set up | See Section 9 |
| GA4 gtag in pages | Pending | Paste snippet before `</body>` |
| og-image.jpg | Missing | Add 1200×630 JPG at root |
| Newsletter signup | Cosmetic only | Wire up to Mailchimp/ConvertKit if wanted |
| emibinny.com typo domain | Not registered | Buy and 301 redirect to emilbinny.com |
| Writing.html featured card | Div not `<a>` tag | Works visually but link is inside; fix if click area is wrong |

---

## 11. Passwords & Credentials

| Service | Detail |
|---|---|
| Formspree form ID | `mkoybyoe` |
| Formspree submits to | `emil.binny@gmail.com` |
| GitHub repo | github.com/emilbinny/emilbinny.github.io |
| GitHub username | emilbinny |
| GitHub auth | Personal Access Token (regenerate at github.com/settings/tokens — previous token was exposed in chat, revoke it) |
| Domain registrar | Check where emilbinny.com was purchased |
| Cloudflare | DNS managed here |

---

## 12. Quick Reference — Nav & Footer HTML

Every page uses identical nav and footer. Copy exactly:

### Nav
```html
<header>
  <nav>
    <a href="/" aria-label="Home"><img src="/logo.svg" alt="EB" class="logo-img"/></a>
    <button class="menu-btn" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
    <div class="navlinks" id="nav">
      <a href="/about.html">About</a>
      <a href="/research.html">Research</a>
      <a href="/writing.html">Writing</a>
      <a href="/contact.html">Connect</a>
      <a href="https://gradmentor.org" class="gm-link" target="_blank" rel="noopener">GradMentor ↗</a>
    </div>
  </nav>
</header>
```
Add `class="active"` to the current page's nav link.

### Footer
```html
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div>
        <div class="foot-name">Emil Mathew Binny</div>
        <div class="foot-tag">Strategy · International Business · Applied Economics</div>
      </div>
      <div class="foot-links">
        <a href="/about.html">About</a>
        <a href="/research.html">Research</a>
        <a href="/writing.html">Writing</a>
        <a href="/contact.html">Connect</a>
        <a href="https://gradmentor.org" target="_blank" rel="noopener">GradMentor ↗</a>
        <div class="socials">
          <a href="https://www.linkedin.com/in/emilbinny/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://twitter.com/EmilBinny" target="_blank" rel="noopener">X</a>
          <a href="https://www.instagram.com/_dil_e_mil_/" target="_blank" rel="noopener">Instagram</a>
          <a href="mailto:emil@emilbinny.com">Email</a>
        </div>
      </div>
    </div>
    <div class="copy">© 2026 Emil Mathew Binny. All rights reserved.</div>
  </div>
</footer>
<script>
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded',false)})})}
</script>
```

---
