# Cench AI Landing Page

A modern, responsive landing page for Cench AI - an AI-powered college counseling service. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Interactive Navigation**: Smooth scrolling navigation with dynamic background
- **Hero Section**: Eye-catching hero with call-to-action buttons
- **Feature Showcase**: Interactive 3D-style cards showing product features
- **Use Cases**: Real examples of how the AI helps students
- **Pricing**: Clear pricing tiers with hover effects
- **Footer**: Comprehensive footer with links and social media

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Radix UI**: Accessible UI primitives
- **Class Variance Authority**: Type-safe component variants

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   └── ui/
│       └── button.tsx       # Reusable Button component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets (images, etc.)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Key Components

### HomePage
The main landing page component featuring:
- Dynamic navigation with scroll-based background changes
- Hero section with background image
- Interactive feature showcase with 3D card effects
- Use case examples with AI response previews
- Pricing section with hover animations
- Comprehensive footer

### Button Component
A flexible button component with multiple variants and sizes, built with Class Variance Authority for type safety.

## Styling

The project uses a custom design system with:
- OKLCH color space for better color management
- Custom CSS variables for consistent theming
- Dark mode support (ready for implementation)
- Responsive breakpoints
- Smooth transitions and hover effects

## Images Required

The following images should be placed in the `public/` directory:
- `logo-sidebar.png` - Company logo
- `ripple.png` - Hero background image
- `pfp2.png` - User profile picture
- `xpt.png` - X (Twitter) logo
- `ig3.png` - Instagram logo

## Customization

The landing page is highly customizable:
- Colors can be modified in the CSS variables
- Content can be updated in the component files
- Styling can be adjusted using Tailwind classes
- New sections can be easily added

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: Go to your repository Settings → Pages
3. **Select Source**: Choose "GitHub Actions" as the source
4. **Automatic Deployment**: The site will be automatically built and deployed on every push to the main branch

The site will be available at: `https://[your-username].github.io/[repository-name]/`

### Other Platforms

The project is also ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is for demonstration purposes. Please ensure you have the rights to use any images or content. 