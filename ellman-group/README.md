# Ellman Group - Premium Web Development

A premium, professional website for Ellman Group - a web development agency specializing in creating websites for churches, local governments, and landscaping businesses.

## 🚀 Project Overview

This website showcases the expertise and professionalism of Ellman Group, positioning Josh Ellman as the premium choice for web development in their niche markets. The site demonstrates the quality of work clients can expect through its own design and functionality.

## 🎯 Target Clients

- **Churches**: Professional websites with sermon streaming, event management, and community features
- **Local Governments**: Citizen portals with document management and public information access
- **Landscaping Businesses**: Portfolio showcases with booking systems and estimate calculators

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-optimized
- **Performance**: 90+ Lighthouse scores target
- **Responsive**: Mobile-first design

## 🏗️ Architecture

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── buttons/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Contact.tsx
│   │   └── index.ts
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── index.ts
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── animations.ts
└── public/
    └── assets/
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern Blue (#2563eb)
- **Secondary**: Sophisticated Gray (#64748b)
- **Accent**: Success Green (#10b981)
- **Neutral**: Clean grays for text and backgrounds

### Typography
- **Display**: 4rem (64px) - Hero headlines
- **H1**: 3rem (48px) - Page titles
- **H2**: 2.25rem (36px) - Section headers
- **H3**: 1.5rem (24px) - Subsections
- **Body**: 1rem (16px) - Regular text

### Components
- Modular, reusable components with consistent prop patterns
- Highly customizable through props
- Barrel exports for clean imports
- TypeScript interfaces for type safety

## 📱 Features

### Core Sections
1. **Hero**: Compelling headline with trust indicators and CTAs
2. **Services**: Three main service areas with detailed features
3. **Portfolio**: Filterable case studies with results
4. **About**: Josh's story and company values
5. **Process**: 5-step development methodology
6. **Contact**: Form with consultation CTA

### Interactive Elements
- Smooth scroll animations with Framer Motion
- Hover effects and micro-interactions
- Responsive navigation with mobile menu
- Form validation and submission states
- Portfolio filtering by category

### Performance Optimizations
- Next.js Image optimization
- Dynamic imports for code splitting
- Lazy loading for below-fold content
- Optimized fonts and assets
- SEO metadata and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ellman-group
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Goals

- **Lighthouse Scores**: 90+ across all metrics
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags and structured data
- **Conversion**: Optimized user flow and CTAs

## 🎯 Success Metrics

- **Professional Appearance**: Premium look that inspires confidence
- **User Experience**: Intuitive navigation and clear value proposition
- **Conversion Optimization**: Multiple contact points and clear CTAs
- **Performance**: Fast loading times and smooth interactions

## 🔧 Customization

### Content Updates
- Update business information in `src/lib/constants.ts`
- Modify service details and portfolio items
- Adjust contact information and social links

### Styling Changes
- Modify design tokens in `tailwind.config.ts`
- Update component variants and styles
- Customize animations in `src/lib/animations.ts`

### Adding Features
- Create new components in the appropriate directories
- Follow the established patterns for props and exports
- Maintain consistency with the design system

## 📝 License

This project is proprietary to Ellman Group. All rights reserved.

## 👨‍💻 Developer

**Josh Ellman** - Student at Taylor University
- Email: josh@ellmangroup.com
- Location: Taylor University Area

---

*Built with ❤️ using Next.js and Tailwind CSS*
