# Portfolio Site

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📱 Mobile-friendly interface
- 🎭 Beautiful animations and transitions
- 📧 Contact form with validation
- 🌙 Dark mode support (ready for implementation)

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Routing**: Wouter
- **State Management**: React Query
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd PortfolioSite
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/public` directory.

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the build settings
3. Deploy!

## Project Structure

```
PortfolioSite/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── server/               # Backend server (for development)
├── dist/                # Build output
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── netlify.toml        # Netlify configuration
└── vercel.json         # Vercel configuration
```

## Customization

### Colors and Theme

Edit the CSS variables in `client/src/index.css` to customize the color scheme:

```css
:root {
  --accent: hsl(217, 91%, 60%);  /* Primary accent color */
  --primary: hsl(218, 50%, 8%);   /* Primary text color */
  --secondary: hsl(215, 6%, 45%); /* Secondary text color */
  /* ... other variables */
}
```

### Content

Update the content in `client/src/pages/home.jsx` to personalize your portfolio:

- Personal information
- Services offered
- Contact details
- Social media links

## Troubleshooting

### Build Issues

If you encounter build errors:

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Clear Vite cache:
```bash
npm run build -- --force
```

### Deployment Issues

- Ensure all dependencies are in `package.json`
- Check that build command outputs to `dist/public`
- Verify that `index.html` is in the root of the build output

## License

MIT License - feel free to use this project for your own portfolio! 