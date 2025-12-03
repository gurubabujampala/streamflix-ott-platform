# StreamFlix - Developer Guide

## Quick Start

### Prerequisites
- Node.js v22.12.0 or higher
- npm 10.9.0 or higher
- Modern web browser

### Installation

```bash
# 1. Clone repository
git clone <repository-url>
cd ott-platform

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Opens at http://localhost:7891
```

### Project Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Development Workflow

### Creating a New Page

1. **Create page component**
   ```bash
   # File: src/pages/NewPage.jsx
   ```

2. **Implement component**
   ```jsx
   import { useState } from 'react';
   import Card from '../components/common/Card';
   import VideoPlayer from '../components/common/VideoPlayer';

   function NewPage() {
     const [selectedVideo, setSelectedVideo] = useState(null);
     const [isPlayerOpen, setIsPlayerOpen] = useState(false);

     return (
       <div className="page">
         <div className="container">
           <h1 className="page-title">New Page</h1>
           {/* Your content */}
         </div>
       </div>
     );
   }

   export default NewPage;
   ```

3. **Add route**
   ```jsx
   // File: src/App.jsx
   import NewPage from './pages/NewPage';

   // Add to routes array
   { path: '/new-page', element: <NewPage /> }
   ```

4. **Add navigation link**
   ```jsx
   // File: src/components/common/Header.jsx
   <Link to="/new-page" className="nav-link">New Page</Link>
   ```

### Adding New Data

1. **Create/Update data file**
   ```javascript
   // File: src/data/newData.js
   export const items = [
     {
       id: 1,
       title: 'Item 1',
       // ... other fields
     }
   ];

   export const getItemById = (id) => {
     return items.find(item => item.id === id);
   };
   ```

2. **Import and use in component**
   ```jsx
   import { items } from '../data/newData';

   function Component() {
     return (
       <div className="card-grid">
         {items.map(item => (
           <Card key={item.id} {...item} />
         ))}
       </div>
     );
   }
   ```

### Styling Guidelines

1. **Use CSS variables**
   ```css
   .my-element {
     color: var(--color-red);
     padding: var(--spacing-md);
     border-radius: var(--radius-md);
   }
   ```

2. **Follow naming conventions**
   ```css
   .component-name { }           /* Component block */
   .component-name-element { }   /* Element */
   .component-name--modifier { } /* Modifier */
   ```

3. **Add to index.css**
   ```css
   /* src/styles/index.css */
   .my-component {
     /* styles */
   }
   ```

---

## Code Standards

### File Structure

```
src/
├── components/
│   └── common/          # Reusable components
│       └── Component.jsx
├── pages/              # Route components
│   └── Page.jsx
├── data/               # Static data
│   └── dataFile.js
└── styles/             # Global styles
    └── index.css
```

### Naming Conventions

- **Files**: PascalCase for components (`Card.jsx`, `VideoPlayer.jsx`)
- **Functions**: camelCase (`handleClick`, `getData`)
- **Constants**: UPPER_SNAKE_CASE (`SAMPLE_VIDEO_URL`)
- **CSS Classes**: kebab-case (`.card-grid`, `.video-player`)

### Component Template

```jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);

  const handleEvent = () => {
    // Handler logic
  };

  return (
    <div className="component-name">
      {/* Component JSX */}
    </div>
  );
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

---

## Testing

### Manual Testing Checklist

- [ ] Page loads without errors
- [ ] All images load correctly
- [ ] Video player opens and plays
- [ ] Navigation works between pages
- [ ] Responsive on mobile/tablet
- [ ] Keyboard navigation works
- [ ] ESC key closes video player

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing

Test on:
- iOS Safari
- Android Chrome
- Tablet devices

---

## Debugging

### Common Issues

**Port already in use:**
```bash
lsof -ti:7891 | xargs kill -9
npm run dev
```

**Build errors:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

**Images not loading:**
- Check network tab for 404s
- Verify image URLs are valid
- Check CORS headers

### Debug Tools

1. **React DevTools**
   - Install browser extension
   - Inspect component tree
   - View props and state

2. **Console Logging**
   ```jsx
   console.log('Debug:', { selectedVideo, isPlayerOpen });
   ```

3. **Network Tab**
   - Monitor image/video requests
   - Check response times
   - Verify CORS

---

## Performance Tips

### Image Optimization

```jsx
// Use lazy loading
<img loading="lazy" src={image} alt={title} />

// Provide responsive images
<img 
  srcSet="small.jpg 400w, large.jpg 800w"
  sizes="(max-width: 768px) 400px, 800px"
  src="large.jpg"
  alt={title}
/>
```

### Code Splitting

```jsx
// Lazy load routes
import { lazy, Suspense } from 'react';

const Movies = lazy(() => import('./pages/Movies'));

<Suspense fallback={<div>Loading...</div>}>
  <Movies />
</Suspense>
```

### Memoization

```jsx
import { useMemo, useCallback } from 'react';

// Memoize expensive calculations
const filteredMovies = useMemo(() => {
  return movies.filter(m => m.genre === selectedGenre);
}, [movies, selectedGenre]);

// Memoize callbacks
const handleClick = useCallback((id) => {
  setSelected(id);
}, []);
```

---

## Git Workflow

### Branch Naming

```
feature/video-playlist
fix/player-close-bug
docs/api-documentation
refactor/card-component
```

### Commit Messages

```
feat: add video playlist functionality
fix: resolve video player close issue
docs: update component API documentation
style: improve card hover animation
refactor: simplify video player logic
test: add unit tests for Card component
chore: update dependencies
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Changes Made
- Added X feature
- Fixed Y bug
- Updated Z documentation

## Testing
- [ ] Tested on Chrome
- [ ] Tested on mobile
- [ ] No console errors
```

---

## Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Output in dist/ directory
ls dist/
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Variables

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_CDN_URL=https://cdn.example.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Helpful Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **React Router**: https://reactrouter.com
- **MDN Web Docs**: https://developer.mozilla.org

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Update documentation
6. Submit pull request

---

**Version**: 1.0.0
**Last Updated**: December 3, 2025
