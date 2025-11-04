# Scotty's on the Strand - Modern Website

A modern, responsive website for Scotty's on the Strand restaurant in Hermosa Beach, CA, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on port 4000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit **http://localhost:4000** to view the website.

## 📋 Project Overview

This is a complete rebuild of the Scotty's on the Strand website, preserving all original content and menu items while providing a modern, mobile-first user experience.

### Restaurant Information
- **Name:** Scotty's on the Strand
- **Address:** 1100 The Strand, Hermosa Beach, CA 90254
- **Phone:** (310) 318-7152
- **Email:** info@scottysonthestrand.com
- **Hours:** Daily 6:30 AM - 10:00 PM

## 🌐 Website Pages

### Public Pages
1. **Home** (`/`) - Landing page with hero section, about, menu highlights, and location
2. **Breakfast** (`/breakfast`) - Complete breakfast menu (served until 3:00 PM)
3. **Lunch** (`/lunch`) - Sandwiches, burgers, seafood, pizzas, and more
4. **Sunset Specials** (`/sunset-specials`) - Special pricing from 4:30-9:30 PM
5. **Dinner** (`/dinner`) - Full dinner menu with appetizers, entrees, and beverages
6. **Special Events** (`/special-events`) - Private dining room information
7. **Location** (`/location`) - Map, directions, and contact information

## 🎨 Design Features

### Color Scheme
- **Ocean Blue** (#0284c7) - Primary color
- **Sandy Beige** (#f5f5dc) - Secondary color
- **Sunset Orange** (#f97316) - Accent color

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, clean aesthetic
- ✅ Fast page loads with Next.js optimization
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Click-to-call and click-to-email functionality
- ✅ Interactive Google Maps integration
- ✅ SEO optimized with proper metadata
- ✅ Accessible design with semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (system fonts)
- **Deployment Ready:** Vercel, Netlify, or any Node.js hosting

## 📁 Project Structure

```
cam-scottys/
├── app/
│   ├── components/          # Shared components
│   │   ├── Header.tsx       # Site header
│   │   ├── Navigation.tsx   # Navigation menu
│   │   ├── Footer.tsx       # Site footer
│   │   └── types.ts         # TypeScript types
│   ├── breakfast/           # Breakfast page
│   ├── lunch/               # Lunch page
│   ├── sunset-specials/     # Sunset Specials page
│   ├── dinner/              # Dinner page
│   ├── special-events/      # Special Events page
│   ├── location/            # Location page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/
│   └── images/              # Image assets
│       ├── header/          # Navigation images
│       ├── menu/            # Menu images
│       └── general/         # General images
├── PROJECT_PLAN.md          # Detailed project plan
├── ASSETS.md                # Image asset inventory
└── README.md                # This file
```

## 📱 Component Architecture

### Layout Components
- **Header** - Displays restaurant name, contact info, and hours
- **Navigation** - Responsive menu with mobile hamburger
- **Footer** - Contact details, hours, and social media links

### Page Components
All pages are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive grid layouts
- SEO-optimized metadata
- Mobile-first design

## 🎯 Key Features by Page

### Homepage
- Hero section with call-to-action
- Restaurant highlights
- Menu preview cards
- Location information with map

### Menu Pages (Breakfast, Lunch, Dinner)
- Clean, organized menu sections
- Clear pricing
- Item descriptions
- Responsive grid layouts
- Category headers with visual separation

### Sunset Specials
- Eye-catching value pricing
- Time restrictions clearly displayed
- Special disclaimers
- Sunset-themed orange accents

### Special Events
- Private dining room information
- Event types with icons
- Room capacity and policies
- Contact forms and CTAs

### Location
- Interactive Google Maps
- Contact information
- Parking details
- Directions

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 📝 Content Management

All menu content is currently hardcoded in the page components. For easier content management, consider:
- Adding a CMS (Sanity, Contentful, or Strapi)
- Using markdown files for menu items
- Creating a JSON data structure for menus

## 🔧 Development Notes

- Development server runs on **port 4000** (configured in package.json)
- All images are stored in `/public/images/`
- Custom Tailwind colors are configured in `tailwind.config.ts`
- TypeScript strict mode is enabled
- ESLint is configured for code quality

## 📞 Contact

For questions about this website project:
- **Restaurant:** Scotty's on the Strand
- **Phone:** (310) 318-7152
- **Email:** info@scottysonthestrand.com

---

Built with ❤️ using Next.js and Tailwind CSS
