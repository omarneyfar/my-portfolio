# Next.js Portfolio - JSON-Driven Architecture

A modern, fully type-safe portfolio website built with Next.js 15, TypeScript, and a dynamic content system powered by JSON.

## ✨ Features

- **Dynamic Content System**: All content loaded from `data/content.json` - no hard-coded text
- **Multi-language Support**: Instant language switching (FR/EN) without page reload  
- **Type-Safe**: Complete TypeScript type safety with `content.types.ts`
- **Section & Component Registry**: Dynamic rendering system for sections and components
- **Server-Side Rendering**: Full SSR support for optimal SEO and performance
- **Contact Form**: Validated contact form with email notifications and Telegram logging
- **Project Filtering**: Advanced filtering and sorting for projects
- **Framer Motion**: Smooth animations and loading states
- **Accessibility**: ARIA labels and keyboard navigation support
- **Responsive**: Mobile-first design with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your values:
- `RESEND_API_KEY`: Your Resend API key ([get one here](https://resend.com/api-keys))
- `EMAIL_FROM`: Sender email address
- `CONTACT_EMAIL`: Where contact form submissions are sent
- `TELEGRAM_BOT_TOKEN`: (Optional) For logging to Telegram
- `TELEGRAM_CHAT_ID`: (Optional) Your Telegram chat ID

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to view your portfolio.

## 📁 Project Structure

```
├── data/content.json          # All site content (JSON)
├── src/
│   ├── app/                   # Next.js app router
│   ├── components/
│   │   ├── dynamic/          # Content components (HeroComponent, SkillsGrid, etc.)
│   │   ├── sections/         # Section wrappers
│   │   └── ui/               # UI components
│   ├── lib/
│   │   ├── content.types.ts  # Type definitions
│   │   ├── content.loader.ts # Server-side content loader
│   │   └── section-registry.tsx # Component registry
│   └── hooks/useContent.ts   # Client-side SWR hook
```

## 🎨 Customization

### Editing Content

All content is in `data/content.json`. The structure is fully typed in `src/lib/content.types.ts`.

**Add a project**:
```json
{
  "id": "my-project",
  "title": "Project Title",
  "description": { "fr": "...", "en": "..." },
  "technologies": ["React", "Node.js"],
  "category": "personal",
  "featured": true,
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "imageUrl": "/images/projects/project.jpg",
  "year": 2024
}
```

### Available Scripts

- `npm run dev` - Development server (port 5000)
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run linter

## 📧 Contact Form

Features:
- Client & server-side validation
- Rate limiting (3 requests/min)
- Email via Resend
- CV request detection
- Telegram logging (optional)

## 🌍 Deployment

Ready for deployment on Vercel, Netlify, or any Node.js platform.

Set environment variables in your deployment platform.

## 📝 License

MIT - Use this as a template for your portfolio!
