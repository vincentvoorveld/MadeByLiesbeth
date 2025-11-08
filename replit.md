# Made By Liesbeth - Portfolio Website

## Overview
A beautiful, responsive single-page portfolio website showcasing handmade jewelry (armbanden) and crocheted toys (gehaakte knuffels) by Liesbeth. The site features a warm burgundy color scheme, elegant Poppins typography, and smooth user interactions.

## Project Information
- **Type**: Static portfolio website (React SPA)
- **Status**: ✅ Complete and tested
- **Language**: Dutch (nl)
- **Created**: November 2025

## Features

### Completed Features
1. **Sticky Header Navigation**
   - Burgundy (#800020) header with white text
   - Logo: "Made By Liesbeth"
   - 9 navigation items with smooth scrolling
   - Responsive hamburger menu for mobile

2. **Hero Section**
   - Full-width hero image with dark overlay
   - Welcome message and description
   - Call-to-action button scrolling to products

3. **Product Galleries**
   - **Armbanden (Bracelets)**: 8 product images
   - **Gehaakte Knuffels (Crocheted Toys)**: 7 product images
   - Responsive grid: 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
   - Lightbox functionality for enlarged image viewing

4. **Reviews Section**
   - 3 customer testimonials
   - Card-style layout with names

5. **Werkwijze (Process)**
   - 3-step workflow with icons
   - Clear explanation of custom order process

6. **Inspiratie (Inspiration)**
   - 3 lifestyle photos with captions
   - Gift ideas and seasonal inspiration

7. **Contact Section**
   - Email button (mailto:madebyliesbeth@example.com)
   - WhatsApp button (opens WhatsApp chat)
   - Visual contact form (name, email, message)

8. **FAQ Section**
   - 5 accordion items with common questions
   - Single-expand behavior

9. **About Section**
   - Liesbeth's portrait photo
   - Personal bio explaining passion for handcraft

10. **Footer**
    - Copyright text: "© 2025 Made By Liesbeth | Handgemaakt met liefde"
    - Burgundy background matching header

11. **Interactive Features**
    - Smooth scrolling between sections
    - Scroll-to-top button (appears after scrolling)
    - Lightbox modal with accessibility support
    - Mobile-optimized interactions

## Technical Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn UI components (Button, Card, Dialog, Accordion, Input, Textarea)
- Lucide React icons
- Wouter for routing

### Design System
- **Primary Color**: Burgundy #800020 (hsl(345, 100%, 25%))
- **Font**: Poppins (Google Fonts)
- **Aesthetic**: Warm, elegant, feminine
- **Layout**: Single-page with smooth scrolling navigation

### Key Components
- `client/src/pages/home.tsx` - Main portfolio page with all sections
- `client/src/index.css` - Burgundy color scheme configuration
- `client/index.html` - SEO metadata and Poppins font

## Project Structure
```
client/
├── src/
│   ├── pages/
│   │   └── home.tsx          # Main portfolio page
│   ├── components/ui/         # Shadcn UI components
│   ├── index.css              # Global styles & colors
│   └── App.tsx                # App router
├── index.html                 # HTML entry point
attached_assets/
└── generated_images/          # 20 AI-generated product images
```

## Responsive Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1023px (2 columns)
- **Desktop**: ≥ 1024px (4 columns)

## Navigation Sections
1. Home (Hero)
2. Armbanden (Bracelets)
3. Gehaakte Knuffels (Crocheted Toys)
4. Reviews (Customer Testimonials)
5. Werkwijze (Process/How It Works)
6. Inspiratie (Inspiration Gallery)
7. Contact (Email, WhatsApp, Form)
8. Veelgestelde vragen (FAQ)
9. Over Made By Liesbeth (About)

## Testing
Comprehensive end-to-end testing completed:
- ✅ Desktop responsive layout (1920x1080)
- ✅ Tablet responsive layout (768x1024)
- ✅ Mobile responsive layout (375x667)
- ✅ Smooth scrolling navigation
- ✅ Lightbox image viewer
- ✅ Hamburger menu functionality
- ✅ Accordion FAQ behavior
- ✅ All interactive elements
- ✅ Accessibility (Dialog a11y improvements)

## Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Screen reader support for lightbox (DialogTitle, DialogDescription)
- Keyboard navigation support
- High contrast burgundy/white color scheme

## Images
20 AI-generated placeholder images:
- 1 hero banner (16:9)
- 8 bracelet product photos (1:1)
- 7 crocheted toy photos (1:1)
- 3 inspiration lifestyle photos (4:3)
- 1 portrait of Liesbeth (3:4)

## Running the Application
```bash
npm run dev
```
Server runs on port 5000 with Vite HMR for development.

## Recent Changes
- **2025-11-08**: Initial creation
  - Configured burgundy color scheme
  - Generated all product images
  - Built all sections with responsive design
  - Implemented smooth scrolling and lightbox
  - Added FAQ accordion and mobile menu
  - Completed accessibility improvements
  - Passed comprehensive e2e testing

## User Preferences
- Dutch language (nl) content
- Warm, elegant aesthetic
- Burgundy accent color (#800020)
- Poppins typography
- Single-page portfolio layout
- Mobile-first responsive design

## Future Enhancements (Not in MVP)
- Backend for actual contact form submission
- Product inventory management
- Shopping cart functionality
- Admin panel for content updates
- Image optimization and lazy loading
- Multi-language support (EN/NL)
