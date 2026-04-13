# 💖 FemmeUI — Soft Luxury Feminine Design System

<div align="center">

![FemmeUI Banner](https://img.shields.io/badge/FemmeUI-Soft%20Luxury%20Design%20System-F8A8C4?style=for-the-badge&logo=heart&logoColor=white)
![Components](https://img.shields.io/badge/Components-32%2B-CDB4FF?style=for-the-badge)
![CSS](https://img.shields.io/badge/Vanilla%20CSS-No%20Framework-FFD6A5?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-A8E6CF?style=for-the-badge)

**A complete feminine UI design system for beauty brands, boutiques & salons.**  
Pastel palettes · Glassmorphism · Micro-animations · Editorial typography

[🌸 View Live Demo](#) · [📖 Docs](#components) · [💌 Report Issue](#)

</div>

---

## ✨ Features

- 🎨 **Full Color System** — Blush, Lavender, Peach, Gold, and Champagne palettes
- ✍️ **Elegant Typography** — Playfair Display, Cormorant Garamond, Poppins & Quicksand
- 💅 **32+ Components** — Fully styled and interactive out of the box
- 🪟 **Glassmorphism** — Frosted glass cards, modals, and overlays
- 🪄 **Micro-animations** — Smooth hover effects, reveals, loaders, and transitions
- 🛍️ **Commerce Kit** — Product cards, cart drawer, checkout stepper, booking calendar
- 💅 **Salon Kit** — Service cards, stylist profiles, booking system
- 🌓 **Dark Mode** — Soft dark theme toggle built in
- 📱 **Fully Responsive** — Mobile-first layout and components
- ♿ **Accessible** — Focus states, ARIA roles, keyboard navigation

---

## 🚀 Quick Start

Clone the repo and open `index.html` in your browser — no build step required!

```bash
git clone https://github.com/Alysha93/UI-Components.git
cd UI-Components
# Open index.html in your browser
```

Or serve with any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

---

## 📁 File Structure

```
UI-Components/
├── index.html              ← Main component showcase
├── css/
│   ├── tokens.css          ← Design tokens (colors, spacing, shadows)
│   ├── base.css            ← Reset, typography, utilities
│   ├── animations.css      ← Keyframes & motion system
│   ├── components.css      ← All UI components
│   └── layout.css          ← Hero, footer, responsive grid
├── js/
│   └── main.js             ← Interactions & component logic
└── README.md
```

---

## 🎨 Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#F8A8C4` | Blush Pink — CTAs, highlights |
| `--primary-dark` | `#E86FA3` | Rose — hover states, headings |
| `--secondary` | `#CDB4FF` | Lavender — secondary actions |
| `--accent` | `#FFD6A5` | Peach Gold — warm accents |
| `--highlight` | `#BDE0FE` | Baby Blue — subtle pops |
| `--gold` | `#D4AF37` | Luxury Gold — premium tier |
| `--champagne` | `#F7E7CE` | Ivory warmth — luxury backgrounds |
| `--background` | `#FFF7FB` | Soft pink-white — page base |
| `--text` | `#2B2B2B` | Ink — body text |

---

## 🧩 Components

### Navigation
- **Navbar** — Glass effect, sticky, mobile hamburger menu
- **Mobile Menu** — Slide-down panel with smooth animation

### Buttons (8 variants + 5 gradients)
| Variant | Usage |
|---------|-------|
| `btn-primary` | Blush gradient — main CTA |
| `btn-secondary` | Lavender — secondary actions |
| `btn-gold` | Gold luxury — premium actions |
| `btn-peach` | Warm peach — soft CTA |
| `btn-outline` | Rose outline — ghost light |
| `btn-ghost` | Text only — tertiary |
| `btn-glass` | Frosted glass |
| `btn-danger` | Soft red — destructive |
| `btn-gradient-*` | Aurora, Rose, Lavender, Peach, Luxury |

### Cards
- **Soft Shadow Card** — Default content container
- **Glassmorphism Card** — Frosted overlay cards
- **Profile Card** — Stylist/influencer cards with rating
- **Image Overlay Card** — Editorial-style full-bleed cards
- **Product Card** — Commerce card with wishlist, badge, price
- **Service Card** — Salon service listing card

### Forms
- **Floating Label Input** — Animated label lifts on focus
- **Select Dropdown** — Custom styled select with pink caret
- **Toggle Switch** — Pastel on/off switch
- **Heart Checkbox** — Animated heart-shaped checkboxes
- **Soft Slider** — Gradient range input with pill thumb
- **Radio Buttons** — Pill-styled radio selectors
- **Textarea** — Floating label textarea

### Commerce
- **Product Grid** — 4-column responsive product grid
- **Cart Drawer Preview** — Item list with quantity stepper
- **Checkout Stepper** — 4-step progress UI
- **Booking Calendar** — Interactive date picker
- **Time Slot Selector** — Grid of available times
- **Service Grid** — Salon service cards

### Overlays
- **Modal** — Glass blur backdrop, scale-in animation
- **Toast Notifications** — 4 types (success/warning/error/info)
- **Tooltip** — Pill-shaped hover tooltips

### Misc
- **Badge System** — 7 color variants
- **Tag / Chip** — Toggleable filter chips
- **Avatar** — 4 sizes, stacked group
- **Progress Bar** — Gradient fills with shimmer loading
- **Loaders** — Spin, dots, heart pulse, scale pulse
- **Stepper** — Checkout/onboarding progress
- **Tabs** — Pill tab switcher
- **Accordion** — FAQ with smooth expand
- **Testimonial Slider** — Auto-advancing with dots
- **Pagination** — Pill buttons with active state
- **Newsletter Section** — Floating orb background

---

## 🪄 Animation System

```css
/* Reveal on scroll */
.reveal { /* add class, auto animates via IntersectionObserver */ }
.reveal-delay { /* same, with 200ms delay */ }

/* Floating elements */
.float-1  { animation: float 6s ease-in-out infinite; }
.float-2  { animation: float 8s ease-in-out infinite 1s; }
.float-3  { animation: float 7s ease-in-out infinite 2s; }

/* Text */
.shimmer-text { /* moving gradient shimmer on text */ }
.text-gradient { /* pink gradient text fill */ }
.text-gradient-gold { /* gold luxury gradient text */ }
```

---

## 🌸 Design Tokens

```css
/* Spacing */
--space-xs: 4px   --space-sm: 8px   --space-md: 16px
--space-lg: 24px  --space-xl: 40px  --space-xxl: 64px

/* Border Radius */
--radius-sm: 8px   --radius-md: 16px  --radius-lg: 24px
--radius-xl: 32px  --radius-full: 999px

/* Shadows */
--shadow-soft:    0 10px 30px rgba(248,168,196,0.15)
--shadow-glow:    0 0 25px rgba(248,168,196,0.35)
--shadow-gold:    0 0 25px rgba(212,175,55,0.3)
--shadow-heavy:   0 30px 70px rgba(0,0,0,0.12)
```

---

## 🧠 AI Prompt (for Antigravity / AI builders)

```
Build a feminine luxury UI using the FemmeUI design system.
Style: soft luxury · pastel pink/lavender/peach palette
Effects: glassmorphism overlays · smooth micro-animations · rounded components
Typography: Playfair Display headings · Poppins body
Rules: no harsh black shadows · no sharp corners · generous whitespace
Components: use the provided CSS token variables and class names
```

---

## 💄 Use Cases

- 💅 **Beauty Salons** — Booking system, stylist profiles, service cards
- 🛍️ **Fashion Boutiques** — Product grids, filters, cart, checkout
- 💄 **Cosmetics Brands** — Landing pages, editorial layouts
- 🧖 **Wellness & Spa** — Service menus, appointment booking
- 👗 **Personal Fashion Blogs** — Editorial typography, image cards
- 🌸 **Wedding Planners** — Soft luxury invitation-style pages

---

## 🤍 Credits

Designed & built with love by **Alysha93**  
Typography: [Google Fonts](https://fonts.google.com) — Playfair Display, Cormorant Garamond, Poppins, Quicksand

---

<div align="center">

💖 **FemmeUI** · Soft Luxury · Modern Feminine · Editorial Beauty

</div>
