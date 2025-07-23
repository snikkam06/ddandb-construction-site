# DD&B Construction - Modern About Page

A sleek, modern re-imagining of the DD&B Construction "About – Commercial General Contractors" page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and hover effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Type-Safe**: Built with TypeScript for better development experience
- **Performance Optimized**: Next.js 15 with App Router for optimal performance
- **Accessible**: Built with accessibility best practices using Headless UI components
- **Animated Components**: Smooth animations powered by Framer Motion
- **Image Optimization**: Next.js Image component with remote image support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Image Slider**: Keen Slider
- **Linting**: ESLint with Next.js and Tailwind CSS plugins
- **Formatting**: Prettier with Tailwind CSS plugin

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # Main about page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page (redirects to about)
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section with background image
│   ├── ServicesGrid.tsx      # Services showcase grid
│   ├── Timeline.tsx          # Company timeline
│   ├── Stats.tsx             # Animated statistics
│   ├── SafetyProgram.tsx     # Safety program accordion
│   └── TestimonialCarousel.tsx # Client testimonials slider
├── data/
│   └── content.ts            # Content data and configuration
└── lib/
    └── types.ts              # TypeScript type definitions
```

## 🎨 Design Features

### Hero Section
- Full-screen background image with gradient overlay
- Animated text and call-to-action button
- Smooth scroll indicator

### Services Grid
- Three-column responsive grid
- Hover effects with image scaling
- Modern card design with shadows

### Timeline
- Vertical timeline with alternating layout
- Animated timeline nodes
- Responsive design for mobile

### Statistics
- Animated counters
- Gradient background
- Key company metrics

### Safety Program
- Accordion-style collapsible sections
- Accessibility-focused with Headless UI
- Detailed safety information

### Testimonials
- Horizontal carousel with Keen Slider
- Client photos and information
- Responsive grid layout

## 🚦 Getting Started

### Prerequisites

- Node.js 20 LTS or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dd-b-construction-site
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎯 Key Components

### Hero Component
- Background image with Next.js Image optimization
- Framer Motion animations
- Smooth scroll functionality

### Services Grid
- Responsive card layout
- Hover animations
- Image optimization

### Timeline
- Alternating layout for desktop
- Mobile-optimized design
- Smooth animations

### Stats Counter
- Animated number counting
- Viewport-triggered animations
- Performance optimized

### Safety Program
- Headless UI Disclosure components
- Keyboard navigation support
- ARIA accessibility

### Testimonial Carousel
- Keen Slider integration
- Responsive breakpoints
- Touch/swipe support

## 🌟 Brand Colors

- **Primary Navy**: `#0a1f33` (brand-900)
- **Accent Blue**: `#1e4d7d` (brand-500)
- **Light Blue**: `#eaf3fb` (brand-100)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized layouts for all screen sizes

## 🔧 Configuration

### Tailwind Configuration
- Custom brand colors
- Extended typography
- Form styling plugins

### Next.js Configuration
- Remote image patterns configured
- Experimental features enabled
- Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For any questions or support, please contact the development team.

---

Built with ❤️ using Next.js 15 and Tailwind CSS # ddandb-construction-site
# dandy-dev-branch
