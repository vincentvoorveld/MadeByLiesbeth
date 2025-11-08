# Made By Liesbeth Portfolio Website

## Overview

This is a single-page portfolio website for "Made By Liesbeth," showcasing handmade jewelry (bracelets) and crocheted toys. The website features a warm, elegant aesthetic with burgundy (#800020) as the primary brand color. Built as a static portfolio with smooth scrolling navigation between sections, the site emphasizes visual storytelling through product galleries and customer testimonials.

The application is built using React with TypeScript on the frontend, Express on the backend, and uses shadcn/ui components styled with Tailwind CSS following the "new-york" design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Language**: React 18 with TypeScript, using functional components and hooks

**Routing**: Wouter for lightweight client-side routing (though primarily a single-page application with anchor-based navigation)

**State Management**: 
- TanStack Query (React Query) for server state management
- React hooks (useState, useEffect) for local component state
- No global state management library needed due to simple application scope

**Styling Approach**:
- Tailwind CSS for utility-first styling
- Custom design tokens defined in CSS variables for consistent theming
- shadcn/ui component library (new-york variant) for pre-built, accessible UI components
- Poppins font family from Google Fonts for typography
- Responsive design with mobile-first breakpoints

**Component Structure**:
- Single-page layout with scrollable sections (Hero, Armbanden, Gehaakte Knuffels, Reviews, Werkwijze, Inspiratie, Contact, FAQ, About)
- Sticky header navigation with hamburger menu for mobile
- Image lightbox/dialog functionality for product galleries
- Accordion component for FAQ section
- Form components (Input, Textarea) for contact section

**Build System**: Vite for fast development and optimized production builds

### Backend Architecture

**Server Framework**: Express.js running on Node.js

**API Design**: RESTful API structure with `/api` prefix (currently minimal endpoints as this is primarily a static portfolio)

**Development Tools**:
- tsx for TypeScript execution in development
- esbuild for backend bundling in production
- Hot module replacement via Vite in development

**Session Management**: Infrastructure in place for session handling (connect-pg-simple), though not actively used in current static portfolio implementation

### Data Storage

**Database**: PostgreSQL via Neon serverless database

**ORM**: Drizzle ORM for type-safe database operations

**Schema Management**:
- Schema definitions in `shared/schema.ts` for shared types between frontend and backend
- Migration files stored in `./migrations` directory
- Drizzle Kit for schema pushing and migration management

**Current Schema**: Minimal user table (id, username, password) - likely for future admin functionality

**Storage Interface**: Abstracted through `IStorage` interface with in-memory implementation (MemStorage) and potential for database-backed implementation

### Design System

**Color Palette**:
- Primary: Burgundy (#800020 / HSL 345 100% 25%)
- Warm neutrals and soft backgrounds throughout
- Design tokens use HSL color space with CSS custom properties for easy theming

**Typography**:
- Primary font: Poppins
- Font weights: 300, 400, 500, 600, 700
- Fallback: sans-serif system fonts

**Spacing System**: Tailwind's default spacing scale (2, 4, 6, 8, 12, 16, 20 units)

**Component Variants**:
- Button variants: default, destructive, outline, secondary, ghost
- Button sizes: default (h-9), sm (h-8), lg (h-10), icon
- Consistent border radius: lg (9px), md (6px), sm (3px)

**Elevation/Shadow System**: Custom shadow utilities (shadow-2xs, etc.) with hover and active state elevations

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, navigation, popover, scroll-area, select, tabs, toast, tooltip, etc.)
- Embla Carousel for potential carousel functionality
- cmdk for command palette functionality
- Lucide React for icon components

**Form Handling**:
- React Hook Form for form state management
- @hookform/resolvers for validation schema integration
- Zod for runtime type validation
- drizzle-zod for generating Zod schemas from Drizzle ORM schemas

**Utilities**:
- clsx and tailwind-merge (via cn utility) for conditional className composition
- class-variance-authority for component variant management
- date-fns for date formatting and manipulation

**Development Tools**:
- @replit/vite-plugin-runtime-error-modal for better error display
- @replit/vite-plugin-cartographer for Replit-specific development features
- @replit/vite-plugin-dev-banner for development environment indicators

**Database & Backend**:
- @neondatabase/serverless for PostgreSQL connection
- drizzle-orm and drizzle-kit for database operations
- connect-pg-simple for PostgreSQL session storage

**Assets**: Generated images stored in `attached_assets/generated_images/` directory including hero banner, product photos (bracelets and crocheted toys), inspiration photos, and portrait