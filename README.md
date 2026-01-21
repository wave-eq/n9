# Ninethray Technologies Website

Premium, mission-grade B2B marketing website for Ninethray Technologies Pvt Ltd.

## Overview

A comprehensive Next.js website showcasing Ninethray's products and services across:
- **Cyber Security & Digital Forensics**
- **Artificial Intelligence Platforms**
- **Defense-Grade Drone Systems**
- **Anti-Drone Protection Technologies**

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk, JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
ninethray/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── careers/                  # Careers page
│   ├── contact/                  # Contact page
│   ├── industries/               # Industries pages
│   │   └── [slug]/              # Dynamic industry pages
│   ├── legal/                    # Legal pages
│   │   ├── privacy-policy/
│   │   └── terms-of-use/
│   ├── products/                 # Products pages
│   │   └── [category]/[slug]/  # Dynamic product pages
│   ├── services/                 # Services pages
│   │   └── [category]/[slug]/  # Dynamic service pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # Dynamic sitemap
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                # Section components
│   │   ├── Hero.tsx
│   │   ├── CTASection.tsx
│   │   └── SectionHeading.tsx
│   └── ui/                      # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Dialog.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Accordion.tsx
├── content/                      # Content data
│   ├── navigation.ts            # Navigation structure
│   ├── products.ts              # Products data
│   ├── services.ts              # Services data
│   ├── industries.ts            # Industries data
│   ├── home.ts                  # Home page content
│   ├── about.ts                 # About page content
│   ├── careers.ts               # Careers content
│   └── contact.ts               # Contact content
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   └── robots.txt
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Content Management

All content is stored in TypeScript files in the `/content` directory for easy management:

- **Products**: Edit `/content/products.ts` to add/modify products
- **Services**: Edit `/content/services.ts` to add/modify services
- **Industries**: Edit `/content/industries.ts` to add/modify industries
- **Navigation**: Edit `/content/navigation.ts` to modify menu structure
- **Page Content**: Edit respective files in `/content` for page-specific content

## Design System

### Colors

- **Background**: Ink-950 (#050A14), Ink-900 (#0B1020)
- **Surfaces**: Slate-800 (#111827), Slate-700 (#1F2937)
- **Text**: Primary (#EAF0FF), Muted (#A7B0C0)
- **Accent**: Cyan (#22D3EE), Electric Blue (#3B82F6)
- **Status**: Success (#34D399), Warning (#FBBF24), Critical (#EF4444)

### Typography

- **Headings**: Space Grotesk
- **Body**: Inter
- **Mono**: JetBrains Mono

### Components

All UI components follow a consistent design pattern with:
- Dark-first color scheme
- Subtle hover effects with cyan glow
- Accessible focus states
- Responsive design
- Keyboard navigation support

## Key Features

- ✅ Fully responsive design
- ✅ Dark-first "mission-grade" theme
- ✅ SEO optimized with metadata and sitemap
- ✅ Accessible (WCAG AA compliant)
- ✅ Performance optimized
- ✅ Type-safe with TypeScript
- ✅ Dynamic routing for products, services, and industries
- ✅ Contact forms with validation
- ✅ Demo request modals
- ✅ Job application system
- ✅ FAQ accordions
- ✅ Subtle animations (respects prefers-reduced-motion)

## Customization

### Before Deployment

1. **Replace Placeholder Content**:
   - Update contact details in `/content/contact.ts`
   - Update careers email in `/content/careers.ts`
   - Replace legal pages with actual policies

2. **Update Domain**:
   - Change domain in `/app/sitemap.ts`
   - Update domain in `/public/robots.txt`
   - Update OpenGraph URLs in `/app/layout.tsx`

3. **Add Real Images**:
   - Replace placeholder image references
   - Add product screenshots
   - Add team photos (if applicable)

4. **Configure Forms**:
   - Implement actual form submission logic
   - Connect to email service or CRM
   - Add reCAPTCHA if needed

5. **Add Analytics**:
   - Google Analytics
   - Tag Manager
   - Other tracking tools

## Deployment

### Podman/Docker Container (Recommended for Self-Hosting)

The application is containerized and ready to deploy with Podman on port **98878**.

#### Quick Start

```bash
# Make deployment script executable
chmod +x deploy.sh

# Deploy the container
./deploy.sh
```

The website will be available at: **http://localhost:98878**

#### Manual Deployment

```bash
# Build the image
podman build -t ninethray-website .

# Run the container
podman run -d \
  --name ninethray-website \
  -p 98878:98878 \
  -e NODE_ENV=production \
  --restart unless-stopped \
  ninethray-website
```

#### Using Podman Compose

```bash
# Start the service
podman-compose up -d

# View logs
podman-compose logs -f

# Stop the service
podman-compose down
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Node.js

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example variables (add as needed)
NEXT_PUBLIC_SITE_URL=https://ninethray.com
CONTACT_FORM_ENDPOINT=your-endpoint
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Proprietary - © 2024 Ninethray Technologies Pvt Ltd. All rights reserved.

## Support

For technical support or questions about this website, contact the development team.

---

**Note**: This is a complete, production-ready website. Ensure all placeholder content is replaced with actual information before deployment.
