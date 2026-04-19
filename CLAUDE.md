# H2ONE Hydrogen Water — Project Reference

## Tech Stack
- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS v3 (Apple-inspired design system)
- **Routing**: React Router v6
- **Animation**: Framer Motion
- **SEO**: react-helmet-async
- **Deployment**: Netlify (continuous deploy from `main` branch)

## Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| `apple-blue` | `#0071e3` | CTA buttons, links, accents |
| `apple-gray` | `#f5f5f7` | Section backgrounds, badges |
| `apple-dark` | `#1d1d1f` | Headings, body text |
| `apple-mid` | `#6e6e73` | Secondary text, labels |

### Typography
| Scale | Size | Usage |
|---|---|---|
| `display` | 80px | Hero headline |
| `headline` | 48px | Section headings |
| `title` | 28px | Card titles |
| `body` | 17px | Body copy |

Font stack: `-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, Arial, sans-serif`

### Spacing
- Section padding: `py-24 md:py-32` (Apple-style breathing room)
- Content column: `max-w-content` = 980px, centered with `mx-auto px-6`

### Reusable CSS Classes (defined in `src/index.css`)
- `.section-padding` — standard section vertical padding
- `.content-width` — centered 980px content column
- `.section-label` — small blue uppercase label above headings
- `.btn-primary` — filled blue pill button
- `.btn-secondary` — outlined blue pill button

## Folder Structure
```
src/
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, WhatIsH2, About, Products, WhyUs, FAQ, ContactCTA
    ui/           # AnimatedCounter, ProductDetail
  pages/
    products/     # HydrogenSystem, H2OnePure, ShowerFilter
    Home.jsx, About.jsx, Contact.jsx
  utils/
    constants.js  # NAV_LINKS, PRODUCTS, FAQ_ITEMS, STATS, FEATURES
```

## Git Workflow
- **`develop`** — active development branch (default working branch)
- **`main`** — production branch, triggers Netlify auto-deploy
- Always work on `develop`, open PR to `main` when ready to deploy

## Routes
| Path | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/hydrogensystem` | HydrogenSystem |
| `/h2one-pure` | H2OnePure |
| `/shower-filter` | ShowerFilter |

## Netlify
- Site name: `h2one-hydrogen-water`
- Repo: `netinstallinc/Website-H2ONE`
- Build command: `npm run build`
- Publish dir: `dist`
- All routes redirect to `/index.html` (SPA config)

## Adding a New Product Page
1. Add product data to `src/utils/constants.js` PRODUCTS array
2. Create `src/pages/products/YourProduct.jsx` using `<ProductDetail>` component
3. Add route to `src/App.jsx`
4. Card auto-appears on Home page from constants

## Source Reference
- Original Webflow site: https://h2onehydrogenwater.webflow.io
- Design reference: https://apple.com
- GitHub org: https://github.com/netinstallinc
