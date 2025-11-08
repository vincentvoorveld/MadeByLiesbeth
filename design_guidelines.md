# Design Guidelines for Made By Liesbeth Portfolio Website

## Design Approach
This is a **single-page portfolio website** for handmade jewelry and crocheted toys. The design follows a **warm, elegant aesthetic** with burgundy accents, prioritizing visual storytelling through product photography galleries.

## Core Design Elements

### Typography
- Primary font: **Poppins** or **Raleway** (Google Fonts)
- Elegant, highly readable sans-serif
- Hierarchy: Large hero headlines, medium section titles, comfortable body text

### Layout System
Use Tailwind spacing primitives: **2, 4, 6, 8, 12, 16, 20**
- Section padding: `py-16` to `py-20` on desktop, `py-8` to `py-12` on mobile
- Container: `max-w-7xl` for full-width sections, `max-w-4xl` for content
- Grid gaps: `gap-6` to `gap-8`

### Color Palette
**Primary Burgundy: #800020** (header, footer, accents, buttons)
Warm neutrals and soft backgrounds throughout
White for text on burgundy backgrounds

## Component Structure

### Header (Sticky Navigation)
- Slim horizontal bar in burgundy with white text
- Left: "Made By Liesbeth" logo/wordmark
- Right: 9-item navigation menu (Home | Armbanden | Gehaakte Knuffels | Reviews | Werkwijze | Inspiratie | Contact | Veelgestelde vragen | Over Made By Liesbeth)
- Mobile: Hamburger menu that expands/collapses
- Smooth scroll behavior to sections

### Hero Section
- Full-width hero image (`/images/hero.jpg`)
- Dark overlay for text readability
- Centered overlay text: "Welkom bij Made By Liesbeth – handgemaakte sieraden en gehaakte knuffels met liefde gemaakt"
- Brief introductory paragraph
- Prominent CTA button "Bekijk collectie" with **blurred background effect** (scrolls to products)

### Product Galleries (Armbanden & Gehaakte Knuffels)
- Section title with decorative element
- Responsive grid: 4 columns desktop → 2 columns tablet → 1 column mobile
- Image placeholders: `/images/armband1.jpg`, `/images/knuffel1.jpg`, etc.
- Clickable images open **lightbox overlay** for full-size viewing
- Equal aspect ratios, subtle hover effects

### Reviews Section
- Title: "Wat klanten zeggen"
- 3-4 review cards in horizontal layout (responsive to vertical stack)
- Each card: quote text, customer name, subtle card styling
- Example: "De gehaakte beer was prachtig! – Marieke"

### Werkwijze (Process) Section
- 3 horizontal blocks with icons above
- Steps: 1️⃣ Idee bespreken | 2️⃣ Materialen kiezen | 3️⃣ Met liefde handgemaakt
- Clean, minimal icon representation

### Inspiratie Gallery
- 3-column grid of inspiration photos (responsive to single column)
- Brief captions: "Cadeau voor een vriendin", "Kraamcadeau", "Lente-inspiratie"
- Mood/lifestyle photography style

### Contact Section
- Title: "Neem contact op"
- Descriptive text about ordering/inquiries
- Two prominent action buttons:
  - ✉️ Email button (mailto:madebyliesbeth@example.com)
  - 💬 WhatsApp button (opens WhatsApp link)
- Visual contact form below (naam, bericht, verzendknop) - frontend only

### FAQ Section (Accordion)
- Accordion-style expandable questions (4-5 items)
- Questions include: "Kan ik iets op maat laten maken?", "Hoe lang duurt een bestelling?", "Hoe onderhoud ik mijn sieraad?"
- Click to expand/collapse answers

### About Section (Over Made By Liesbeth)
- Two-column layout: Photo of Liesbeth left (`/images/lies.jpg`), bio text right
- Personal story about crafting passion and uniqueness
- Responsive to single column on mobile

### Footer
- Burgundy background (#800020), light text
- Centered copyright: "© 2025 Made By Liesbeth | Handgemaakt met liefde"
- Optional: Scroll-to-top button in corner

## Images Required
1. **Hero image** (`/images/hero.jpg`) - Large, full-width showcase image
2. **Product images**: Multiple bracelets (`armband1-8.jpg`) and crocheted toys (`knuffel1-8.jpg`)
3. **Inspiration photos**: 3 lifestyle/mood images
4. **Portrait**: Photo of Liesbeth (`/images/lies.jpg`)

## Key Interactions
- **Smooth scrolling** between all menu items and sections
- **Lightbox modal** for product image enlargement
- **Accordion toggle** for FAQ items
- **Hamburger menu** animation on mobile
- Minimal, purposeful animations - avoid distracting motion

## Responsive Breakpoints
- Desktop: 4-column grids, horizontal layouts
- Tablet (768px): 2-column grids, maintained horizontal where possible
- Mobile (<640px): Single column, stacked layouts, hamburger menu