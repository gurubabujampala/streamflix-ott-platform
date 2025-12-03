# StreamFlix - Component API Documentation

## Card Component

**File**: `src/components/common/Card.jsx`

### Props

```typescript
interface CardProps {
  title: string;           // Required - Display title
  meta: string;            // Required - Metadata (e.g., "Action • 2015")
  rating?: string;         // Optional - Rating display
  description?: string;    // Optional - Description text
  type?: 'movie' | 'series' | 'game' | 'music'; // Optional - Default: 'movie'
  image?: string;          // Optional - Image URL (uses fallback if not provided)
  onClick?: () => void;    // Optional - Click handler
}
```

### Usage Example

```jsx
<Card
  title="The Dark Knight"
  meta="Action • 2008"
  rating="9.0"
  type="movie"
  image="https://image.tmdb.org/t/p/w500/poster.jpg"
  onClick={() => handlePlay('The Dark Knight')}
/>
```

### Features
- Auto-generates placeholder images if none provided
- 1:1.5 aspect ratio (portrait)
- Lazy loading enabled
- Hover animations
- Click-to-play functionality

---

## VideoPlayer Component

**File**: `src/components/common/VideoPlayer.jsx`

### Props

```typescript
interface VideoPlayerProps {
  videoUrl: string;        // Required - Video source URL
  title: string;           // Required - Title displayed above video
  onClose: () => void;     // Required - Close handler function
  isOpen: boolean;         // Required - Modal visibility control
}
```

### Usage Pattern

```jsx
function Page() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleCardClick = (title) => {
    setSelectedVideo({ title, url: VIDEO_URL });
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <>
      <Card onClick={() => handleCardClick('Title')} />
      {selectedVideo && (
        <VideoPlayer
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          onClose={handleClosePlayer}
          isOpen={isPlayerOpen}
        />
      )}
    </>
  );
}
```

### Features
- Full-screen modal overlay
- Auto-play on open
- HTML5 video controls
- ESC key support
- Click-outside-to-close
- Body scroll lock
- Responsive design

---

## Header Component

**File**: `src/components/common/Header.jsx`

### Props
None - Static navigation component

### Usage
```jsx
<Header />
```

### Features
- Sticky positioning
- Netflix-inspired branding
- Navigation links: Movies, Series, Games, Music
- Active route highlighting
- Responsive design

---

## Footer Component

**File**: `src/components/common/Footer.jsx`

### Props
None - Static footer component

### Usage
```jsx
<Footer />
```

### Content
- Copyright information
- Brand tagline

---

## Common Patterns

### Grid Layout
```jsx
<div className="card-grid">
  {items.map(item => (
    <Card
      key={item.id}
      title={item.title}
      meta={`${item.genre} • ${item.year}`}
      rating={item.rating}
      type="movie"
      image={item.image}
      onClick={() => handleClick(item.title)}
    />
  ))}
</div>
```

### Video Player Integration
```jsx
// State
const [selectedVideo, setSelectedVideo] = useState(null);
const [isPlayerOpen, setIsPlayerOpen] = useState(false);

// Handler
const handleCardClick = (title) => {
  setSelectedVideo({ title, url: SAMPLE_VIDEO_URL });
  setIsPlayerOpen(true);
};

const handleClosePlayer = () => {
  setIsPlayerOpen(false);
  setTimeout(() => setSelectedVideo(null), 300);
};

// Render
{selectedVideo && (
  <VideoPlayer
    videoUrl={selectedVideo.url}
    title={selectedVideo.title}
    onClose={handleClosePlayer}
    isOpen={isPlayerOpen}
  />
)}
```

---

## CSS Classes Reference

### Card Component
- `.card` - Main container
- `.card-image-container` - Image wrapper
- `.card-image` - Image element
- `.card-content` - Content overlay
- `.card-title` - Title text
- `.card-meta` - Metadata row
- `.card-rating` - Rating badge

### VideoPlayer Component
- `.video-modal-overlay` - Full-screen overlay
- `.video-modal-content` - Modal container
- `.video-modal-close` - Close button
- `.video-modal-title` - Title text
- `.video-container` - Video wrapper
- `.video-player` - Video element

### Layout
- `.card-grid` - Grid container for cards
- `.genre-filter` - Genre button row
- `.page` - Page container
- `.container` - Content wrapper

---

**Version**: 1.0.0
**Last Updated**: December 3, 2025
