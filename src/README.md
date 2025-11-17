# Omar Naifar - Portfolio Website

A production-ready, high-performance portfolio landing site built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Internationalization**: English, French, and Arabic support
- **Dark Mode**: System-aware with manual toggle
- **Contact Form**: Integrated with Supabase for lead storage and email notifications
- **Authentication**: NextAuth.js with GitHub OAuth
- **Animations**: Smooth micro-animations with Motion (Framer Motion)
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions for automated testing and Vercel deployment
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and keyboard navigation
- **Performance**: Optimized images, minimal bundle size, and server components

## 📋 Prerequisites

- Node.js 18+ or 20+
- pnpm 8+ (recommended) or npm/yarn
- Supabase account
- SendGrid account (for emails) or SMTP server
- GitHub OAuth app (for authentication)

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd omar-naifar-portfolio
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add the following:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key

# OR for SMTP (alternative to SendGrid)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASSWORD=your_app_password

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret_generate_with_openssl
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret

# Admin (for role-based access)
ADMIN_EMAILS=omarneyfar@gmail.com
```

### 4. Set up Supabase

#### Create the contact_leads table

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  preferred_start_date TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users
CREATE POLICY "Allow inserts" ON contact_leads
  FOR INSERT TO authenticated
  WITH CHECK (true);

-- Create policy to allow admins to read all
CREATE POLICY "Allow admins to read" ON contact_leads
  FOR SELECT TO authenticated
  USING (auth.email() IN (SELECT unnest(string_to_array(current_setting('app.admin_emails', true), ','))));
```

### 5. Set up SendGrid (Email)

1. Create a SendGrid account at https://sendgrid.com
2. Create an API key with "Mail Send" permissions
3. Add the API key to your `.env.local` file

### 6. Set up GitHub OAuth

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create a new OAuth app
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Add Client ID and Secret to `.env.local`

### 7. Generate NextAuth Secret

```bash
openssl rand -base64 32
```

Add the output to `NEXTAUTH_SECRET` in `.env.local`.

## 🏃‍♂️ Running the Application

### Development mode

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## 🧪 Testing

### Run all tests

```bash
pnpm test
# or
npm test
```

### Run tests in watch mode

```bash
pnpm test:watch
# or
npm run test:watch
```

### Run tests with coverage

```bash
pnpm test -- --coverage
```

## 📦 Project Structure

```
├── app/
│   ├── (marketing)/          # Marketing pages
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── projects/         # Projects pages
│   │   ├── contact/          # Contact page
│   │   └── layout.tsx        # Marketing layout
│   ├── api/
│   │   └── contact/          # Contact API route
│   └── layout.tsx            # Root layout
├── src/
│   ├── components/           # React components
│   ├── data/                 # Static data
│   ├── lib/                  # Utilities
│   ├── locales/              # i18n translations
│   └── tests/                # Test files
├── styles/
│   └── globals.css           # Global styles + Tailwind
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI/CD
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest configuration
└── package.json              # Dependencies
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

### GitHub Actions (Automated)

The CI/CD pipeline automatically:
1. Runs tests on every push/PR
2. Builds the project
3. Deploys to Vercel on main branch pushes

Set these secrets in your GitHub repository settings:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🎨 Design System

### Colors

- **Midnight Blue**: `#081320` - Primary dark background
- **Electric Teal**: `#00c2a8` - Primary accent
- **Amber**: `#ffb86b` - Secondary accent
- **Soft Slate**: `#f6f8fa` - Light backgrounds
- **Charcoal**: `#0f1724` - Dark surfaces
- **White**: `#ffffff` - Light text and backgrounds

### Typography

- **Primary Font**: Inter (400, 700)
- **Monospace**: JetBrains Mono (for code)

## 🌐 Internationalization

The site supports:
- **English (en)** - Default
- **French (fr)**
- **Arabic (ar)** - RTL support

To add more languages:
1. Create a new JSON file in `src/locales/`
2. Add translations following the existing structure
3. Update `src/lib/i18n.ts`

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Server Components**: Used by default for better performance
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **Bundle Size**: Optimized with tree-shaking

## 🔒 Security

- **Rate Limiting**: Contact form has rate limiting (3 requests/minute)
- **Honeypot**: Anti-spam field in contact form
- **Input Validation**: Zod schema validation
- **Environment Variables**: Sensitive data in `.env.local`
- **HTTPS**: Required in production

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

© 2025 Omar Naifar. All rights reserved.

## 📧 Contact

- **Email**: omarneyfar@gmail.com
- **Phone**: +216 44 785 090 / +216 55 117 837
- **LinkedIn**: [linkedin.com/in/omarneyfarr](https://linkedin.com/in/omarneyfarr)
- **GitHub**: [github.com/omarneyfar](https://github.com/omarneyfar)
- **Location**: Sfax, Tunisia

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
