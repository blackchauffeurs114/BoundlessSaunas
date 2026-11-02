# Boundless Saunas (BoundlessSaunas) 🪵✨

A luxury, handcrafted bespoke sauna platform built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

100% responsive, high-performance web experience engineered for seamless Vercel deployment.

---

## ✨ Features & Architecture

- **Next.js 15 App Router & React 19:** Pure React architecture with zero legacy HTML dumps.
- **Dynamic Materials Switcher:** Interactive tabbed interface for *Internal Cladding*, *External Cladding*, and *Stoves & Heaters*.
- **4-Column Masonry Gallery:** 41 authentic build photographs with responsive aspect ratios, zoom hover states, and a full-screen interactive lightbox modal with keyboard controls (`Esc`, `←`, `→`).
- **Luxury Brand Logo:** Vector typography badge logo (`— EST • 2024 — BOUNDLESS SAUNAS — BESPOKE CRAFT —`).
- **Responsive Mobile Navigation:** Clean mobile drawer menu with smooth transitions, keeping header uncluttered.
- **10 Complete Routes:**
  - `/` — Homepage (Hero, Brand Philosophy, Craftsmanship Mosaic, 8 Pillars, Testimonials)
  - `/about` — About the Founder, Story & Principles
  - `/saunas` — Complete sauna range (The Cove, The Solace, The Haven, The Sanctuary, Mobile Saunas, Custom Bespoke)
  - `/materials` — Wood, Heat & Finish (Interactive tabs for all timbers, stoves, and bespoke additions)
  - `/gallery` — 41-photo interactive masonry gallery with lightbox
  - `/commercial-mobile` — Off-grid commercial sauna trailers (12ft to 18ft+)
  - `/the-luna` — Panoramic glass garden sauna model
  - `/the-nest` — Compact garden sauna model
  - `/contact` — Configurator & consultation inquiry form
  - `/cart` — Build deposit & reservation flow

---

## 📁 Repository Structure

```
BoundlessSaunas/
├── app/                        # Next.js 15 App Router
│   ├── page.tsx               # Home Page
│   ├── about/page.tsx         # About & Story
│   ├── saunas/page.tsx        # Range & Specifications
│   ├── materials/page.tsx     # Materials & Stoves Configurator
│   ├── gallery/page.tsx       # 41-Build Photo Gallery
│   ├── commercial-mobile/     # Commercial Mobile Units
│   ├── the-luna/page.tsx      # The Luna Sauna
│   ├── the-nest/page.tsx      # The Nest Sauna
│   ├── contact/page.tsx       # Contact & Build Inquiries
│   ├── cart/page.tsx          # Reservation Cart
│   ├── globals.css            # Tailwind directives & luxury design system
│   └── layout.tsx             # Root layout with BrandLogo, Navbar & Footer
├── components/                 # Reusable React components
│   ├── BrandLogo.tsx          # Vector typography logo component
│   ├── Navbar.tsx             # Floating transparent luxury header & mobile drawer
│   ├── Footer.tsx             # Comprehensive luxury dark footer
│   ├── LightboxModal.tsx      # Full-screen interactive photo lightbox
│   ├── ContactForm.tsx        # Interactive inquiry form
│   └── Marquee.tsx            # Infinite marquee ticker
├── data/                       # Strongly typed data models
│   ├── galleryItems.ts        # 41 gallery images with exact aspect ratios
│   └── materialsData.ts       # Claddings, stoves & custom features data
├── public/                     # Optimized static assets & photography
│   └── content/               # High-res sauna build photography
├── next.config.mjs            # Next.js 15 configuration
├── tailwind.config.ts         # Tailwind design tokens
├── tsconfig.json              # TypeScript strict configuration
└── package.json               # Dependencies & scripts
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Start production server
npm run start
```

---

## ☁️ Vercel Deployment

This project is optimized for 1-click zero-config deployment on [Vercel](https://vercel.com):
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`
- Node.js Version: **20.x or 22.x**

---

© 2026 Boundless Saunas Ltd. Handcrafted in the UK. All rights reserved.
