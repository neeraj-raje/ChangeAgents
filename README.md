# Change Agents Branding — Website

Premium personal branding website for Change Agents Branding, a strategic communications practice for enterprise technology leaders.

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `why-personal-branding.html` | Why Personal Branding — The Case |
| `services.html` | Services |
| `the-journey.html` | The Journey — Results & Timeline |
| `about.html` | About |
| `contact.html` | Start Here (contact + form) |

## Running Locally

No build step required. Open any `.html` file directly in a browser:

```
open index.html
```

Or use a local server to avoid any `file://` protocol quirks with fonts:

```
npx serve .
# then visit http://localhost:3000
```

Python alternative:

```
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Tech Stack

- Plain HTML, CSS, JavaScript — no frameworks, no build tools
- Google Fonts via CDN: Playfair Display + DM Sans
- All CSS and JS inline within each file
- No external dependencies beyond Google Fonts

## Design Notes

- Typography: Playfair Display (headlines) / DM Sans (body, UI)
- Colour palette: white-dominant with `#B8963E` gold accent
- All elements sharp-edged (no border-radius)
- Scroll-triggered fade-up animations via IntersectionObserver
- Fully responsive — hamburger nav on mobile ≤768px
- Contact form includes client-side validation and a success state
