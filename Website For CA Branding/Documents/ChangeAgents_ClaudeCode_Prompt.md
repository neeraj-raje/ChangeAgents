# Claude Code Prompt — Change Agents Website

---

## OVERVIEW

Build the full marketing website for **Change Agents**, a founder-led strategic positioning and market architecture advisory firm based in India. The founder is Shubhendu Nath. The firm advises enterprise technology companies and senior leaders on positioning, competitive architecture, and narrative alignment.

This is the complete build prompt. Do not begin coding until you have read every section. Design decisions must serve the brand character described below before serving any other consideration.

---

## ASSETS

The following assets will be provided in the project folder:

- `assets/logo/change-agents-logo.*` — The Change Agents logo. Use it as-is. Do not alter colours, proportions, or spacing. Use the logo in the site header (left-aligned on desktop) and in the footer.
- `assets/team/shubhendu-nath.*` — Portrait photograph of Shubhendu Nath (Founder)
- `assets/team/neeraj-raje.*` — Portrait photograph of Neeraj Raje
- `assets/team/krishnananda.*` — Portrait photograph of Krishnananda
- `assets/team/sharbari-chakraborty.*` — Portrait photograph of Sharbari Chakraborty (The Collective)

If any asset is missing at build time, use a clean placeholder with the person's initials in a neutral grey square. Never use generic stock photography or icons as placeholders.

---

## TECHNOLOGY STACK

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with a custom design token configuration
- **Animations**: Framer Motion — subtle only. No dramatic motion. No parallax. No scroll-jacking.
- **Fonts**: Load via `next/font` from Google Fonts (see typography section)
- **Deployment-ready**: Ensure the build works with `next build` cleanly
- **No unnecessary dependencies**: Do not add UI component libraries (no shadcn, no MUI, no Radix UI beyond what is strictly needed). Write all components from scratch.

---

## BRAND CHARACTER

Read this section carefully. Every design decision should pass through this filter.

**The site should feel:**
- Minimal
- Calm
- Senior
- Thoughtful
- Understated

**The site should not feel:**
- Busy or cluttered
- "Creative agency" style
- Heavy with graphics, icons, or visual decoration
- Sales-driven or promotional
- Like a consultancy that is trying too hard to appear modern

**Reference points:**
- A high-end management consulting firm's digital presence
- An intelligence briefing or policy advisory publication
- An architect's practice website
- A private bank's communications

**What this means in practice:**
- Every element must earn its place. If it does not serve communication, remove it.
- White space is not empty — it is the design.
- Typography carries the weight. Choose it carefully.
- No icons. No decorative illustrations. No abstract shapes or blobs.
- No testimonial carousels, no stat counters, no animated number reveals.
- No hero images with overlaid text. Text stands on its own.
- Navigation is quiet. It does not compete with content.
- Colour is used with restraint. One dominant neutral palette, one subdued accent at most.

---

## DESIGN SYSTEM

### Colour Palette

Define these as CSS custom properties and Tailwind config tokens. Do not use Tailwind's default colour palette for the primary UI — use only these defined values.

```
--color-ink:       #1A1A1A   /* Primary text — near black, not pure black */
--color-ground:    #F8F7F4   /* Page background — warm off-white, not pure white */
--color-rule:      #DEDBD5   /* Borders, dividers, rules — muted warm grey */
--color-muted:     #8A8880   /* Secondary text, labels, metadata */
--color-accent:    #2B4C7E   /* Single accent — deep navy. Used sparingly. */
--color-white:     #FFFFFF   /* Used only where pure white is needed (e.g. nav on scroll) */
```

The overall tone is warm and quiet. The background is not pure white — it is a very slightly warm off-white. This creates calm.

### Typography

Use two typefaces only. No fallbacks to system fonts in the visible hierarchy.

**Display / Heading font**: `Cormorant Garamond` (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Use for: Page titles (H1), section headings (H2), pull quotes, hero text
- Character: Editorial, refined, unhurried. It has presence without loudness.
- Do not use bold (700) weight for Cormorant — it destroys the elegance.

**Body / UI font**: `DM Sans` (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Use for: Body copy, navigation links, labels, metadata, button text, small print
- Character: Clean, functional, slightly warm. Not cold like Inter.

**Type Scale** (define in Tailwind config):

```
text-display:    clamp(3rem, 6vw, 5.5rem)   — Hero headings
text-title:      clamp(2rem, 3.5vw, 3.25rem) — Page section headings
text-heading:    clamp(1.5rem, 2.5vw, 2rem)  — Sub-section headings
text-lead:       clamp(1.1rem, 1.5vw, 1.35rem) — Lead paragraphs
text-body:       1rem (16px)                 — Body copy
text-small:      0.875rem                    — Labels, metadata, captions
text-micro:      0.75rem                     — Legal, footer notes
```

**Typographic rules:**
- Line height for display/title text: 1.1 to 1.2
- Line height for body text: 1.7 to 1.8
- Letter spacing for headings: -0.02em to -0.03em (slightly tighter)
- Letter spacing for ALL-CAPS labels: 0.12em
- Maximum prose line length: 68 characters (use `max-w-prose` or equivalent)
- Never justify text.
- Never use more than three type sizes on a single page section.

### Spacing

Define a generous spacing scale. The design should breathe.

```
Section vertical padding:  py-24 to py-40 (desktop), py-16 to py-24 (mobile)
Content max width:         max-w-6xl (1152px) centred with auto margins
Column gutter:             gap-16 (desktop), gap-10 (mobile)
Paragraph spacing:         mb-6 between body paragraphs
```

### Grid

- Use a 12-column CSS Grid for page layout
- Most content sits in 8 of 12 columns on desktop (centred or offset left)
- Never use full 12-column content width for prose — text that spans full width becomes unreadable
- Two-column layouts for team cards and service pairs: 6+6 on desktop, stacked on mobile

### Borders and Dividers

- Use thin horizontal rules (`border-t`) to separate sections where necessary
- Rule colour: `--color-rule`
- No box shadows. No card shadows. No raised elements.
- Borders are `1px` only. Never thicker.

### No Icons

Do not use any icon library (Heroicons, Lucide, FontAwesome, etc.). There are no icons anywhere on this site. Navigation uses text only. Bullets use typographic em-dashes (—) or thin rules. Call-to-action arrows, if used, are typographic characters (`→`) in the same font as the text.

---

## NAVIGATION

### Structure

Desktop navigation — horizontal, top of page:

```
Change Agents [LOGO, left]    Executive Advisory  Company Advisory  Strategic Inflection  Communications  The Collective  About    [Start a Conversation] (CTA)
```

- Logo: left-aligned
- Nav links: centred or right-weighted, DM Sans 300, small text, generous letter-spacing
- CTA "Start a Conversation": right-aligned, treated differently from nav links (see CTA section)
- No dropdown menus. All items are direct links.

### Behaviour

- On page load: Navigation background is transparent over the hero section if the hero has no background image (it does not — this site uses no hero images, so nav background matches page background immediately)
- On scroll past 60px: Nav gets a subtle `backdrop-filter: blur(8px)` and a very light `background: rgba(248, 247, 244, 0.95)` with a `1px` bottom border in `--color-rule`
- Active link: Weight increases to 400, no underline, no colour change
- Hover: Opacity 0.6, no underline
- Mobile: Full-screen overlay menu. Plain text links, large size, DM Sans 300, stacked vertically with generous spacing. Close button top right. Background: `--color-ground`.

### CTA Button — "Start a Conversation"

- Not a filled button. Not a pill.
- Style: Text link with a fine `1px` border in `--color-accent`, small padding (`px-4 py-2`), DM Sans 400, `text-small`
- Hover: Background fills with `--color-accent`, text turns white. Transition: 200ms ease.
- This button appears in: Navigation (top right), bottom of every page section, and as a standalone section at the end of each page.

---

## ANIMATION PRINCIPLES

Framer Motion is permitted but must be used with extreme restraint.

**Allowed:**
- Fade-in + slight upward translate on scroll entry (`opacity: 0 → 1`, `y: 16px → 0`, duration: 0.5s, easing: ease-out)
- Stagger delay for lists of items (max 80ms between items)
- Nav link hover opacity transition (CSS only, 200ms)
- CTA button background fill on hover (CSS only, 200ms)
- Mobile menu open/close fade (200ms)

**Not allowed:**
- Parallax effects
- Scroll-jacking or snapping
- Scale transforms on hover (no "grow on hover" cards)
- Rotation, blur-in, or clip-path reveals
- Animated counters or number reveals
- Background video or animated gradients
- Any animation that delays content visibility by more than 300ms

---

## SITE STRUCTURE AND PAGE CONTENT

---

### PAGE: Home (`/`)

**Hero Section**

Full viewport height is NOT required. The hero should be generous but not theatrical. Approximately 80vh.

Layout: Vertically centred content in a left-weighted 8-column block.

Content:
```
[Small label, DM Sans, ALL CAPS, text-micro, --color-muted, letter-spacing: 0.12em]
Strategic Advisory  ·  Enterprise Technology

[H1, Cormorant Garamond, text-display, font-weight: 300, --color-ink]
Shaping Enterprise
Market Architecture

[Lead paragraph, DM Sans 300, text-lead, --color-ink, max-w-lg, line-height: 1.7]
We advise enterprise technology companies and senior leaders on strategic 
positioning, competitive architecture, and narrative alignment — at moments 
of growth, transition, and scale.

[CTA, right-aligned or inline below the paragraph]
→ Start a Conversation
```

No background image. No gradient. Background is `--color-ground`.

A single thin horizontal rule (`border-b`) separates the hero from the next section.

---

**Strategic Statement Section**

Background: `--color-ground`
Padding: `py-32`

Layout: Centred, 6-column, large typographic statement.

Content:
```
[Cormorant Garamond, text-title, font-weight: 300, line-height: 1.2]
Strategy precedes visibility.

[DM Sans 300, text-lead, --color-muted, mt-8, max-w-lg, centred]
Communications amplify positioning.
Positioning shapes perception.

We work before amplification begins — clarifying how enterprise technology 
firms and their leaders are structurally positioned in competitive markets.
```

---

**Focus Areas Section**

Background: `--color-ground`
Padding: `py-32`

Layout: 3-column grid on desktop, stacked on mobile. Each column is a focus area. No card borders, no shadows. Just text, separated by a thin vertical rule (`border-r`) on desktop.

Content:

Column 1:
```
[DM Sans 400, text-small, ALL CAPS, letter-spacing: 0.12em, --color-accent]
Executive Advisory

[Cormorant Garamond, text-heading, font-weight: 400, --color-ink, mt-4]
Market architecture for founders, CEOs, and senior leaders.

[DM Sans 300, text-body, --color-muted, mt-4, line-height: 1.7]
Strategic positioning for leaders navigating growth, transition, 
and leadership visibility.

[Link, DM Sans 300, text-small, --color-accent, mt-6, with arrow →]
Explore →
```

Column 2:
```
[Label] Company Advisory

[Heading] Category positioning and revenue narrative for enterprise technology firms.

[Body] Competitive differentiation, market category design, and analyst 
ecosystem positioning.

[Link] Explore →
```

Column 3:
```
[Label] Strategic Inflection

[Heading] High-stakes advisory during leadership transitions and structural change.

[Body] M&A, market entry, crisis positioning, and structural 
repositioning at critical moments.

[Link] Explore →
```

---

**Founder Statement Section**

Background: White (`--color-white`) — the slight contrast from `--color-ground` signals a shift.
Padding: `py-32`

Layout: 8-column, left-weighted. Two columns: small text column (3 cols) + quote column (5 cols).

Content:
```
Left column:
[DM Sans 400, text-small, ALL CAPS, letter-spacing: 0.12em, --color-muted]
Founder-Led

[DM Sans 300, text-small, --color-muted, mt-4, line-height: 1.7]
All strategic engagements are led directly by Shubhendu Nath, 
drawing on two decades of enterprise technology ecosystem experience 
across India and Asia-Pacific.

Right column:
[Cormorant Garamond, text-title, font-weight: 300, --color-ink, line-height: 1.2]
"We work at the level of positioning — before visibility and messaging are executed."

[DM Sans 300, text-small, --color-muted, mt-6]
Shubhendu Nath, Founder
```

---

**Integrated Communications Section**

Background: `--color-ground`
Padding: `py-24`

Content: A single clean paragraph block with a label.
```
[Label] When Required

[Heading] Integrated Communications

[Body] Once market architecture is defined, we support its execution through 
media strategy, analyst engagement, and narrative activation. 
Communication follows positioning — never precedes it.
```

---

**Closing CTA Section**

Background: Deep navy — `--color-accent`
Padding: `py-32`
Text colour: White

Content:
```
[DM Sans 300, text-small, ALL CAPS, letter-spacing: 0.12em, white, opacity: 0.6]
Limited Engagements

[Cormorant Garamond, text-title, font-weight: 300, white, mt-4, max-w-lg]
We work with a small number of enterprise leaders each year.

[DM Sans 300, text-lead, white, opacity: 0.75, mt-6, max-w-md]
Engagement begins with a confidential exploratory discussion.

[CTA Button — inverted: white border, white text, on hover: white bg + accent text]
Start a Conversation
```

---

### PAGE: Executive Advisory (`/executive-advisory`)

**Hero**
```
[Label] Executive Market Architecture

[H1, Cormorant Garamond, text-display, font-weight: 300]
Positioning for Leaders
Who Shape Markets

[Lead]
We work with founders, CEOs, and senior leaders to clarify how they are 
positioned within their industry — and how that positioning translates into 
influence, opportunity, and long-term relevance.
```

---

**When This Matters Section**

Layout: 2-column. Left: heading. Right: list.

```
[Left heading] When This Matters

[Right: DM Sans 300 list, each item on its own line, preceded by a thin em-dash "—"]
— Stepping into a new leadership role
— Navigating career transition or displacement
— Expanding influence within the ecosystem
— Preparing for board or investor visibility
— Building long-term category association
```

List style: NOT bullet points or icons. Use an em-dash (—) followed by a space before each item. DM Sans 300, text-body, `--color-ink`, line-height: 2.

---

**What We Work On Section**

Same 2-column layout as above.

```
[Left heading] What We Work On

[Right list with em-dashes]
— Strategic positioning and differentiation
— Leadership narrative and identity
— Industry relevance and perception
— Visibility architecture
— Long-term influence design
```

---

**How We Engage Section**

Full-width text block, 6-column centred.

```
[Label] Our Approach

[Body, DM Sans 300, text-lead]
All work is direct, confidential, and founder-led.

We do not operate as a content engine or visibility service. We work at the level 
of positioning before amplification begins.
```

---

**CTA Footer Section** (same `--color-accent` dark navy block used on Home, consistent across all pages)

---

### PAGE: Company Advisory (`/company-advisory`)

**Hero**
```
[H1]
Market Architecture
for Enterprise Technology

[Lead]
We work with enterprise technology firms to define how they are positioned 
in competitive markets — beyond product messaging and marketing narratives.
```

---

**Where We Focus Section**

```
[Left heading] Where We Focus

[Right em-dash list]
— Category positioning and definition
— Revenue narrative alignment
— Competitive differentiation
— India and global market positioning
— Analyst and ecosystem perception
```

---

**Typical Situations Section**

```
[Left heading] Typical Situations

[Right em-dash list]
— Scaling beyond early growth stage
— Entering new markets or segments
— Repositioning services or offerings
— Strengthening enterprise credibility
— Aligning leadership narrative with business strategy
```

---

**Our Approach Section**

```
[Body, large, centred]
We operate upstream of communications — clarifying the strategic foundation 
before visibility and messaging are executed.
```

---

**CTA Footer** (consistent dark navy block)

---

### PAGE: Strategic Inflection (`/strategic-inflection`)

**Hero**
```
[H1]
At Critical Moments,
Positioning Carries
Disproportionate Impact.

[Lead]
We work with leaders and firms during high-stakes transitions where clarity, 
timing, and narrative alignment are essential.
```

---

**Typical Engagements Section**

```
[Left heading] Typical Engagements

[Right em-dash list]
— Leadership transitions
— Market entry or expansion
— M&A and pre/post acquisition positioning
— Crisis or reputation recalibration
— Structural repositioning
```

---

**Nature of Work Section**

2-column grid. Each item is a short phrase with a DM Sans label above it.

```
Item 1:
[Label] Duration
[Text] Short and high-intensity

Item 2:
[Label] Involvement
[Text] Direct founder involvement

Item 3:
[Label] Character
[Text] Confidential and context-driven

Item 4:
[Label] Focus
[Text] Clarity, not volume
```

Layout: 2x2 grid on desktop. Each cell has a thin top border rule in `--color-rule`, no box border.

---

**CTA Footer** (consistent)

---

### PAGE: Communications (`/communications`)

**Hero**
```
[H1]
Communications, Visibility
and Narrative Activation

[Lead]
Once positioning is defined, we support its activation across relevant platforms. 
This is not a content engine. It is an extension of strategic positioning.
```

---

**Services Grid Section**

Layout: 2x2 grid on desktop. Each cell: label + heading + body text. Separated by `border` rules, no shadows.

Cell 1 — Thought Leadership:
```
[Label] Thought Leadership
[Body] Structured insights, industry commentary and articles, speech and keynote narratives.
```

Cell 2 — Industry Visibility:
```
[Label] Industry Visibility
[Body] Conferences and panels, podcasts and interviews, media commentary.
```

Cell 3 — Digital Presence:
```
[Label] Digital Presence
[Body] LinkedIn positioning, personal website where required, search visibility.
```

Cell 4 — Long-Term Platforms:
```
[Label] Long-Term Authority
[Body] Newsletters, podcast or video series, research and reports, book development.
```

---

**Important Note Section**

Full-width, centred, with a fine border box around it — `1px solid --color-rule`, generous internal padding.

```
[Cormorant Garamond, text-heading, font-weight: 300]
All activation work is grounded in prior strategic clarity.

[DM Sans 300, text-body, --color-muted]
We do not begin with visibility.
```

---

**CTA Footer** (consistent)

---

### PAGE: The Collective (`/the-collective`)

**Hero**
```
[H1]
The Change Agents
Collective

[Lead]
A curated group of independent senior advisors who collaborate with Change Agents 
on select engagements requiring a broader combination of perspectives.
```

---

**Context Section**

```
[Body]
Change Agents operates as a founder-led strategic advisory practice. In situations 
where business challenges extend beyond positioning into leadership, behaviour, or 
organisational alignment, we work with a select group of independent advisors.

These are individuals who bring deep experience and operate in their own right — 
and collaborate with us where required.
```

---

**How This Works Section**

```
[Left heading] How This Works

[Right em-dash list]
— Each advisor maintains an independent identity and practice
— Engagement with Change Agents is selective and context-driven
— Collaboration is based on trust, relevance, and problem fit
— We do not operate as a network or marketplace
— The Collective is intentionally small and curated
```

---

**When The Collective Is Engaged Section**

```
[Left heading] When the Collective Is Engaged

[Right em-dash list]
— Strategic positioning requires leadership alignment
— Business transitions require behavioural or organisational shifts
— Founder or leadership journeys intersect with market perception
— Complex situations require multiple lenses beyond communication
```

---

**Collective Member Section — Sharbari Chakraborty**

Layout: 2-column. Left: portrait photograph (square, no border-radius, greyscale). Right: text.

```
[Photo: assets/team/sharbari-chakraborty.*]
Greyscale treatment. No rounded corners. No border. No shadow.
Size: approximately 320x320px on desktop. Full-width on mobile.

[Right side:]
[Name, Cormorant Garamond, text-heading]
Sharbari Chakraborty

[Label, DM Sans 400, text-small, ALL CAPS, letter-spacing: 0.12em, --color-muted]
Leadership Coach  ·  Organisational Transformation

[Body, DM Sans 300, text-body, mt-6]
Sharbari works with senior leaders and leadership teams on navigating complexity, 
enabling behavioural shifts, and building organisational alignment.

Her work sits at the intersection of leadership, culture, and execution — 
particularly in environments undergoing transition, growth, or structural change.

[Areas of work, em-dash list]
— Leadership coaching and development
— Organisational alignment and transformation
— Behavioural change and team dynamics
— Navigating leadership transitions

[Quote, Cormorant Garamond italic, text-lead, --color-muted, mt-8]
"Leadership transitions are rarely about strategy alone. They require a shift 
in how leaders see themselves — and how they are seen by others."
```

---

**CTA Footer** (consistent)

---

### PAGE: About (`/about`)

**Hero**
```
[H1]
About Change Agents

[Lead]
Change Agents began as an enterprise technology communications firm.

Over time, our work increasingly moved upstream — from managing visibility 
to shaping the positioning that determines it.

Today, we operate at the level of enterprise market architecture.
```

---

**Founder Section**

Layout: 2-column. Left: portrait (greyscale, no border-radius). Right: text.

```
[Photo: assets/team/shubhendu-nath.*]
Greyscale. Square crop. No shadow, no border, no border-radius.

[Right side:]
[Name] Shubhendu Nath
[Label] Founder, Change Agents

[Body]
Shubhendu works directly with enterprise technology leaders and firms on strategic 
positioning, narrative alignment, and market architecture.

His experience spans over two decades across enterprise technology ecosystems 
in India and Asia-Pacific.
```

---

**How We Work Section**

Full-width text block followed by a 3-column grid.

```
[Section heading] How We Work

[Intro body]
Change Agents operates as a founder-led strategic advisory practice, working with 
a limited number of enterprise technology leaders and firms each year.

[3-column grid — each column:]

Column 1:
[Label] Strategic Advisory
[Sub-label] Led by Shubhendu Nath
[Body] All engagements are shaped at the level of enterprise market architecture, 
positioning, and narrative alignment.

Column 2:
[Label] Digital & Narrative Strategy
[Sub-label] Led by Neeraj Raje
[Body] Where required, strategic thinking is translated into visible platforms 
through content, digital presence, and narrative amplification.

Column 3:
[Label] Institutional Backbone
[Sub-label] Anchored by Krishnananda
[Body] Ensuring continuity, operational depth, and execution capability 
when activation is required.
```

---

**Team Photographs Section**

Below the 3-column text grid, place a 3-column photograph row:

```
[Photo: assets/team/neeraj-raje.*]     [No photo for Krishnananda — use initials placeholder]
Both: greyscale, square, no border-radius, no shadow.
Name and label below each: DM Sans 300, text-small, centred.
```

---

**Legacy Section**

```
[Body, large, centred, 6-column]
Our work spans infrastructure, cybersecurity, SaaS, distribution, and digital 
transformation ecosystems — across founders, country heads, and global technology firms.
```

---

**CTA Footer** (consistent)

---

### PAGE: Contact / Start a Conversation (`/contact`)

This is the page that "Start a Conversation" links to. It should feel like arriving at the right place — quiet, unhurried, trustworthy.

**Layout**: Single centred column, 6 columns wide.

```
[Label, ALL CAPS] Start a Conversation

[H1, Cormorant Garamond, text-title]
We work with a small number of enterprise leaders and firms each year.

[Body, DM Sans 300, text-lead, --color-muted]
If you would like to explore a potential engagement, write to us. 
All conversations are confidential.

[Email address — large, typographic, not a button]
[DM Sans 300, text-heading, --color-accent]
hello@changeagents.in

[Fine print, DM Sans 300, text-small, --color-muted, mt-12]
Change Agents is a founder-led advisory practice. 
We respond to every serious enquiry personally.
```

No contact form. Email address only. This is intentional — it filters for serious enquiries and maintains the premium, unhurried character of the firm.

---

## FOOTER

Footer appears on all pages. Background: `--color-ink` (near black). Text: white and low-opacity white.

Layout:
```
Row 1 (horizontal flex, space-between):
[Logo — white version]                    [Nav links: Executive Advisory · Company Advisory · Strategic Inflection · Communications · The Collective · About]

Row 2 (mt-12, pt-8, border-top 1px --color-rule muted):
[DM Sans 300, text-micro, opacity: 0.4]
© 2025 Change Agents. All rights reserved. India.

[Right aligned, same style]
All engagements are confidential.
```

No social media links unless explicitly added later. No address, no phone. Clean.

---

## RESPONSIVE BEHAVIOUR

**Breakpoints**: Use Tailwind's standard breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).

**Mobile (below md):**
- Navigation collapses to hamburger → full-screen overlay
- All multi-column layouts stack vertically
- Display type scales down proportionally (use `clamp()` as specified)
- Section padding reduces (from `py-32` to `py-16`)
- Portrait photographs go full-width on mobile

**Tablet (md to lg):**
- 3-column grids collapse to 2-column
- 2-column layouts remain 2-column if space permits, otherwise stack

**Touch:**
- Tap targets minimum 44px
- No hover-only states that are critical to navigation

---

## PHOTOGRAPH TREATMENT

All team and advisor photographs use this treatment consistently:

- **Greyscale**: CSS `filter: grayscale(100%)` — this unifies the visual language and keeps the page calm
- **Aspect ratio**: 1:1 (square crop). Use `aspect-square object-cover` in Tailwind.
- **No border-radius**: Square corners only. No rounded, no circular.
- **No shadow, no border**: The photograph sits flat on the page.
- **Size**: On desktop approximately 280–360px. On mobile full-width.
- **Hover**: Very subtle — `filter: grayscale(60%)` on hover, transition 300ms. This is the only photograph interaction.

---

## COMPONENT SPECIFICATIONS

### `<SectionLabel>` component
```
DM Sans 400 | text-micro | ALL CAPS | letter-spacing: 0.12em | --color-muted
Appears above section headings throughout the site.
```

### `<EmDashList>` component
```
A list where each item begins with an em-dash (—) and a space.
DM Sans 300 | text-body | line-height: 2 | --color-ink
No bullet points. No icons. No indentation beyond the em-dash itself.
```

### `<SectionHeading>` component
```
Cormorant Garamond | font-weight: 300 | text-title | --color-ink | line-height: 1.2 | letter-spacing: -0.02em
```

### `<LeadParagraph>` component
```
DM Sans 300 | text-lead | --color-ink | line-height: 1.75 | max-w-prose
```

### `<CTAButton>` component
```
Variants: "outline" (default) and "outline-inverted" (for dark backgrounds)

Outline:
  Border: 1px solid --color-accent
  Text: --color-accent | DM Sans 400 | text-small
  Padding: px-5 py-2.5
  Hover: bg fills --color-accent, text turns white
  Transition: 200ms ease-in-out
  No border-radius (square corners)

Outline-inverted:
  Border: 1px solid rgba(255,255,255,0.6)
  Text: white | DM Sans 400 | text-small
  Hover: bg fills white, text turns --color-accent
```

### `<HorizontalRule>` component
```
1px border in --color-rule
Full width of its container
Used between sections where a visual break is needed
```

### `<TeamPortrait>` component
```
Props: src, name, title, description (optional)
Image: square, greyscale, no border-radius, no shadow
Name: Cormorant Garamond, text-heading, font-weight: 400
Title: DM Sans 400, text-small, ALL CAPS, letter-spacing: 0.12em, --color-muted
```

### `<TwoColumnStatement>` component
```
Used throughout for the "Left: label/heading | Right: em-dash list" pattern.
Desktop: 4-column left + 8-column right (or 3+9 for very short headings)
Mobile: stacked
```

---

## FILE STRUCTURE

```
/
├── app/
│   ├── layout.tsx              — Root layout with nav + footer
│   ├── page.tsx                — Home
│   ├── executive-advisory/
│   │   └── page.tsx
│   ├── company-advisory/
│   │   └── page.tsx
│   ├── strategic-inflection/
│   │   └── page.tsx
│   ├── communications/
│   │   └── page.tsx
│   ├── the-collective/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionLabel.tsx
│   │   ├── CTAButton.tsx
│   │   ├── EmDashList.tsx
│   │   ├── HorizontalRule.tsx
│   │   └── TeamPortrait.tsx
│   ├── sections/
│   │   ├── PageHero.tsx
│   │   ├── TwoColumnStatement.tsx
│   │   ├── DarkCTAFooter.tsx   — The dark navy CTA block, reused on every page
│   │   └── NatureOfWork.tsx    — 2x2 grid used on Strategic Inflection
├── public/
│   └── assets/
│       ├── logo/
│       │   ├── change-agents-logo.svg   (or .png)
│       │   └── change-agents-logo-white.svg  (for dark footer)
│       └── team/
│           ├── shubhendu-nath.jpg
│           ├── neeraj-raje.jpg
│           ├── krishnananda.jpg
│           └── sharbari-chakraborty.jpg
├── styles/
│   └── globals.css             — CSS custom properties + font imports
└── tailwind.config.ts          — Custom tokens, font families, type scale extensions
```

---

## THINGS TO AVOID — ABSOLUTE

Read these before writing any code. These are non-negotiable.

1. **No hero images or background photographs.** Text stands alone on `--color-ground`.
2. **No icon libraries.** Not even one arrow icon. Use typographic characters.
3. **No card shadows or elevation.** Zero `box-shadow` anywhere in the UI.
4. **No gradient backgrounds.** Not on sections, not on buttons, not on the hero.
5. **No rounded corners on containers, cards, or photographs.** Square everywhere.
6. **No testimonial or quote carousels.** Static quotes only, placed inline.
7. **No animated counters, stats, or progress bars.**
8. **No stock photography or illustration.**
9. **No decorative shapes, blobs, or abstract geometric backgrounds.**
10. **No hover scale transforms (e.g. `hover:scale-105`).**
11. **No full-bleed section background images with overlaid text.**
12. **No chatbot widget, cookie banner (unless legally required), or pop-ups.**
13. **No social proof logos section ("Trusted by...").**
14. **Do not use Inter, Roboto, or any generic system font in the visual hierarchy.**
15. **Do not use purple, teal, or any startup-gradient colour anywhere.**

---

## FINAL INSTRUCTION TO CLAUDE CODE

Build this website completely. Do not stub pages or skip components. Every page listed must be fully implemented with all content as specified.

When a photograph asset is referenced (`assets/team/name.jpg`), use a Next.js `<Image>` component with `src` pointing to the correct path, the greyscale filter applied via a CSS class, and an `alt` attribute that describes the person and their role. If the file does not exist at build time, render a clean grey square with the person's initials in Cormorant Garamond, centred.

Start with:
1. `tailwind.config.ts` — full token configuration
2. `globals.css` — CSS custom properties, font imports
3. Root `layout.tsx` — Navigation + Footer components
4. Home page
5. Then all remaining pages in the order listed
6. Then all shared components

At each step, validate that the design remains consistent with the brand character described: **minimal, calm, senior, thoughtful, understated.**

If there is any ambiguity in the content or layout specifications, resolve it in favour of doing less, not more. Restraint is always correct.
