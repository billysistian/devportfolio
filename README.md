# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, multi-language support (English/Indonesian), and a fully responsive layout optimized for all devices.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Multi-language Support**: Built-in language switcher for English and Indonesian
- **Smooth Animations**: Powered by Motion (Framer Motion) for seamless transitions
- **Modern UI Components**: Built with Radix UI primitives for accessibility
- **Skills Showcase**: Interactive skill categories with tech icons
- **Project Gallery**: Display your projects with detailed information
- **Experience Timeline**: Professional experience and education sections
- **Contact Form**: Easy-to-use contact section
- **SEO Friendly**: Optimized meta tags and semantic HTML

## Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Motion (Framer Motion)** - Animation library

### Other Libraries
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Sonner** - Toast notifications
- **Tailwind Merge** - Utility class merging
- **Class Variance Authority** - Component variant management

## Project Structure

```
personal-portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── TechBadge.tsx
│   │   │   ├── techIcons.tsx
│   │   │   └── ui/        # Reusable UI components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── translations/  # Language translations
│   │   ├── App.tsx        # Main app component
│   │   └── routes.tsx     # Route configuration
│   ├── assets/            # Images and other assets
│   ├── main.tsx           # Application entry point
│   ├── styles/            # Global styles
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── postcss.config.mjs     # PostCSS configuration
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

## Customization

### Adding New Skills

Edit `src/app/translations/en.ts` and `src/app/translations/id.ts` to add new skills to the translations:

```typescript
skills: {
  items: {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Your New Skill'],
    // ...
  }
}
```

Add the corresponding icon in `src/app/components/techIcons.tsx`.

### Changing Colors

Modify the color scheme in `src/styles/theme.css` or use Tailwind's color utilities in your components.

### Adding New Sections

1. Create a new component in `src/app/components/`
2. Import and add it to `src/app/App.tsx`
3. Add the corresponding navigation link in `src/app/components/Navbar.tsx`
4. Add translations in `src/app/translations/`

## Languages

The project supports multiple languages. To add a new language:

1. Create a new translation file in `src/app/translations/` (e.g., `fr.ts`)
2. Add the language option in `src/app/context/LanguageContext.tsx`
3. Add the language switcher button in `src/app/components/Navbar.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or suggestions, please reach out through the contact form on the website or via email.