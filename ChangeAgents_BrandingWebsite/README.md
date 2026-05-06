# Change Agents - Clean Website

A clean, production-ready HTML/CSS/JavaScript website for Change Agents strategic advisory services.

## Project Structure

```
clean-website/
├── index.html                    # Homepage with aurora hero effect
├── executive-advisory.html       # Executive advisory page with aurora hero
├── company-advisory.html         # Company advisory page
├── strategic-inflection.html     # Strategic inflection page
├── css/
│   ├── styles.css               # Main stylesheet with utilities and base styles
│   ├── aurora.css               # Aurora effects and animations
│   └── responsive.css           # (Optional) Additional responsive styles
├── js/
│   ├── main.js                  # Form handling, interactions, and utilities
│   └── navigation.js            # (Optional) Navigation enhancements
└── images/
    ├── backgrounds/
    │   ├── executive-advisory-bg.jpg
    │   └── company-advisory-bg.jpg
    ├── logos/
    └── team/
```

## Getting Started

### Option 1: Open in VS Code
1. Open the `clean-website` folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will open in your default browser

### Option 2: Local Development
1. Navigate to the project directory
2. Use a simple HTTP server (Python, Node.js, or Live Server extension)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed)
http-server

# Or use VS Code's Live Server extension
```

3. Visit `http://localhost:8000` in your browser

## Features

### Design
- **Aurora Effect Hero**: Animated gradient background on homepage and executive advisory page
- **Modern Color Palette**: Aurora blue, indigo, and violet colors throughout
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Form Handling**: Contact form with success state and validation

### Pages
- **Homepage**: Full aurora effect with focus areas and founder statement
- **Executive Advisory**: Aurora hero with background image and content sections
- **Company Advisory**: Category positioning with focus areas and situations
- **Strategic Inflection**: High-stakes advisory information

### Interactive Elements
- Smooth scroll-to-form functionality
- Form submission with success feedback
- Responsive navigation
- Fade-in animations on scroll

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --aurora-blue-500: #3b82f6;
  --aurora-indigo-300: #a5b4fc;
  --aurora-violet-200: #ddd6fe;
  /* ... more colors ... */
}
```

### Typography
Fonts are imported from Google Fonts:
- **Serif (Headings)**: Cormorant Garamond (light, 300)
- **Sans-serif (Body)**: DM Sans (light, normal, semibold, bold)

### Background Images
Replace images in `images/backgrounds/`:
- `executive-advisory-bg.jpg`: Executive advisory hero background
- `company-advisory-bg.jpg`: Company advisory hero background

### Content
Edit the HTML files directly in VS Code. All pages follow the same structure:
1. Hero section
2. Main content
3. CTA footer

## Aurora Effect Customization

The aurora effect is created using CSS gradients and animations. To customize:

1. Edit `css/aurora.css` for animation speed and effects
2. Adjust opacity in `.aurora-hero::before` (currently 0.15)
3. Modify colors in the gradient stops

### Animation Speed
Default is 60 seconds. Change in `aurora.css`:
```css
animation: aurora 60s linear infinite;  /* Change 60s to your desired duration */
```

## Form Setup

The contact form is currently client-side only (shows success message without sending). To set up backend submission:

1. Create a backend endpoint (e.g., `/api/contact`)
2. Update `js/main.js` form submission handler to POST to your endpoint
3. Handle the response and display success/error accordingly

Example endpoint handling:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
  // Handle success
})
.catch(error => {
  // Handle error
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS and JavaScript files
- Compressed background images
- No build process or dependencies required
- Fast loading with minimal HTTP requests

## Development Tips

### Adding New Pages
1. Copy an existing HTML file as a template
2. Modify the hero section and content
3. Update internal links to point to the new page
4. Add the page to navigation if needed

### Editing Styles
- Use `styles.css` for global styles and utilities
- Use `aurora.css` for aurora effect-specific styles
- Avoid inline styles where possible

### Testing
- Test on mobile devices (iOS and Android)
- Test form submission behavior
- Check link functionality
- Verify smooth scroll behavior

## Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

No backend or build process is required.

## License

All content and design © Change Agents. All rights reserved.

## Questions?

Open the files in VS Code and make edits as needed. The structure is intentionally simple to allow easy customization and expansion.
