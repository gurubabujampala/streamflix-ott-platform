# StreamFlix OTT Platform

Your Ultimate Entertainment Destination - A production-ready React application featuring Movies, Web Series, Movie Games, and Music.

## 🌐 Live Demo

**URL**: https://streamflixottapp.netlify.app  
**Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/[YOUR-SITE-ID]/deploy-status)](https://app.netlify.com/sites/streamflixottapp/deploys)

> **Note**: After deploying to Netlify, replace `[YOUR-SITE-ID]` with your actual value.
> See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

## 🎯 Features

- **Movies Section**: Browse popular movies like *The Dark Knight*, *Inception*, etc. with real posters
- **Web Series Section**: Explore hit series like *Breaking Bad*, *The Boys* with season info
- **Movie Games Section**: Interactive cinema-themed games in multiple categories
- **Music Section**: Discover top artists like *Taylor Swift*, *Queen* and their albums
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile with portrait-style movie cards
- **PWA Support**: Installable on mobile devices
- **Modern UI**: Netflix-inspired dark theme with Red, Yellow, and Green accents and responsive image thumbnails

## 📋 Prerequisites

Node.js v22.12.0 or higher is required. If you don't have Node.js installed, follow the ephemeral installation guide below.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:7891` (or another port if 7891 is occupied).

### 3. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## 🛠️ Ephemeral Node.js Installation (macOS)

If you don't want to install Node.js permanently, use this ephemeral installation:

```bash
# Download Node.js v22.12.0
curl -o /tmp/node22.tar.gz https://nodejs.org/dist/v22.12.0/node-v22.12.0-darwin-x64.tar.gz

# Extract archive
cd /tmp && tar -xzf node22.tar.gz

# Add to PATH for current session only
export PATH="/tmp/node-v22.12.0-darwin-x64/bin:$PATH"

# Verify installation
node --version  # Should show v22.12.0
npm --version   # Should show 10.9.0
```

Now you can run npm commands in the same terminal session. Note: This installation will be removed when you restart your computer.

## 📱 Mobile App Installation Guide

### Progressive Web App (PWA) Installation

Since this is a web application, you can install it as a Progressive Web App on mobile devices:

#### iOS (iPhone/iPad)

1. Open Safari browser
2. Navigate to your deployed website URL
3. Tap the Share button (square with arrow pointing up)
4. Scroll down and tap "Add to Home Screen"
5. Edit the name if desired and tap "Add"
6. The app icon will appear on your home screen

#### Android

1. Open Chrome browser
2. Navigate to your deployed website URL
3. Tap the menu (three dots) in the top right
4. Tap "Add to Home Screen" or "Install App"
5. Confirm the installation
6. The app icon will appear on your home screen

### Native Mobile Apps (Optional)

If you need native mobile apps for iOS and Android app stores, you can use:

1. **Capacitor**: Convert the web app to native apps
2. **React Native**: Rebuild the app using React Native
3. **Ionic**: Wrap the web app in a native container

For most use cases, the PWA installation provides a native-like experience without requiring app store approval.

## 🌐 Deployment Guide

### Deploying to Web Hosting

The `dist/` folder contains all files needed for deployment. You can deploy to any static hosting service:

#### Netlify

1. Create account at netlify.com
2. Drag and drop the `dist/` folder
3. Your site is live!

Or use CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

#### GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Traditional Web Hosting (cPanel, etc.)

1. Build the project: `npm run build`
2. Upload all files from the `dist/` folder to your web hosting
3. Ensure the server redirects all requests to `index.html` (for React Router)

Example `.htaccess` for Apache:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🗂️ Project Structure

```
ott-platform/
├── public/
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── Header.jsx     # Navigation header
│   │       ├── Footer.jsx     # Footer component
│   │       └── Card.jsx       # Reusable card component
│   ├── data/
│   │   ├── moviesData.js      # Movie data and filters
│   │   ├── seriesData.js      # Web series data
│   │   ├── gamesData.js       # Game data
│   │   └── musicData.js       # Music data (artists, albums)
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Movies.jsx         # Movies listing
│   │   ├── MoviesByGenre.jsx  # Filtered movies
│   │   ├── WebSeries.jsx      # Series listing
│   │   ├── SeriesByGenre.jsx  # Filtered series
│   │   ├── MovieGames.jsx     # Games section
│   │   ├── Music.jsx          # Music hub
│   │   ├── Artists.jsx        # Artists listing
│   │   ├── Albums.jsx         # Albums listing
│   │   └── MusicGenres.jsx    # Music by genre
│   ├── styles/
│   │   └── index.css          # Global styles
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

## 🎨 Customization

### Changing Colors

Edit `src/styles/index.css` and modify the CSS variables:

```css
:root {
  --accent-purple: #667eea;
  --accent-pink: #f5576c;
  --accent-blue: #4facfe;
  /* ...more colors */
}
```

### Adding New Content

- **Movies**: Edit `src/data/moviesData.js`
- **Series**: Edit `src/data/seriesData.js`
- **Games**: Edit `src/data/gamesData.js`
- **Music**: Edit `src/data/musicData.js`

### Integrating Real API

Replace the static data imports with API calls:

```javascript
// Example in Movies.jsx
import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch('https://your-api.com/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);
  
  // rest of component...
}
```

## 📦 Deployment

### Quick Deploy to Netlify (Free)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Manual Deployment:**

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Create account at [Netlify](https://www.netlify.com)
   - Connect your GitHub repository
   - Netlify auto-detects configuration from `netlify.toml`
   - Click "Deploy site"

3. **Update URLs** (After deployment)
   - Replace `[YOUR-SITE-ID]` with your Netlify site ID

**Detailed Instructions**: See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for complete step-by-step guide.

### Other Deployment Options

<details>
<summary><b>Deploy to Vercel</b></summary>

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

</details>

<details>
<summary><b>Deploy to GitHub Pages</b></summary>

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

</details>

<details>
<summary><b>Traditional Hosting (Apache/Nginx)</b></summary>

```bash
# Build
npm run build

# Upload dist/ folder to your server
# Configure server to serve index.html for all routes
```

</details>

## 📚 Documentation

Complete documentation available in `/docs`:

- **[User Guide](./docs/USER_GUIDE.md)** - For end users
- **[Developer Guide](./docs/DEVELOPER_GUIDE.md)** - For developers
- **[Technical Documentation](./docs/TECHNICAL_DOCUMENTATION.md)** - Architecture & design
- **[Component API](./docs/COMPONENT_API.md)** - Component reference
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Deployment instructions
- **[Architecture](./docs/ARCHITECTURE.md)** - System diagrams

## 🔧 Configuration

### Port Configuration

Default port is 7891. To change it, edit `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    port: 3000, // Your desired port
  }
})
```

### PWA Configuration

Edit `public/manifest.json` to customize the PWA settings:

```json
{
  "name": "Your App Name",
  "short_name": "App",
  "theme_color": "#667eea",
  // ...
}
```

## 📊 Performance

The production build is optimized with:
- Code splitting
- Tree shaking
- Minification
- Gzip compression
- Asset optimization

Total bundle size: ~248 KB (compressed: ~78 KB)

## 🐛 Troubleshooting

### Port Already in Use

If port 7891 is occupied, Vite will automatically use the next available port (7892, 7893, etc.).

### Build Errors

Ensure you're using Node.js v22.12.0 or higher:
```bash
node --version
```

### PWA Not Installing

- Ensure you're using HTTPS (required for PWA)
- Check that `manifest.json` is accessible
- Verify the app meets PWA criteria in browser DevTools

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions, please create an issue in the project repository.

---

Built with ❤️ using React, Vite, and modern web technologies.
