# OTT Platform - Testing Checklist

## Quick Start
```bash
npm run dev
```

## Routes to Test

### ✅ Home Page
- **URL:** `/`
- **What to check:** Featured content from all categories

### ✅ Movies
- **URL:** `/movies`
- **What to check:**
  - All movie thumbnails load
  - Genre filter buttons work
  - All 24 movies display

### ✅ Movies by Genre
- **URLs:**
  - `/movies/action`
  - `/movies/drama`
  - `/movies/comedy`
  - `/movies/thriller`
  - `/movies/sci-fi`
  - `/movies/horror`
  - `/movies/romance`
  - `/movies/animation`
- **What to check:** Filtered movies display correctly

### ✅ Web Series
- **URL:** `/web-series`
- **What to check:**
  - All series thumbnails load
  - Genre filter buttons work
  - All 18 series display

### ✅ Web Series by Genre
- **URLs:**
  - `/web-series/action`
  - `/web-series/drama`
  - `/web-series/comedy`
  - `/web-series/thriller`
  - `/web-series/sci-fi`
  - `/web-series/horror`
  - `/web-series/mystery`
  - `/web-series/fantasy`
- **What to check:** Filtered series display correctly

### ✅ Movie Games (FIXED)
- **URL:** `/movie-games`
- **What to check:**
  - All 9 game images load properly
  - Games are grouped by category:
    - Trivia (3 games)
    - Quiz (2 games)
    - Puzzle (2 games)
    - Adventure (2 games)

### ✅ Music (Main)
- **URL:** `/music`
- **What to check:**
  - Navigation buttons for Artists, Albums, Genres
  - Sample playlists or featured music content

### ✅ Artists (FIXED)
- **URL:** `/music/artists`
- **What to check:**
  - All 8 artists display with images
  - Genre filter buttons work
  - Artist cards show: name, genre, follower count, album count

### ✅ Albums (FIXED)
- **URL:** `/music/albums`
- **What to check:**
  - All 16 albums display with images
  - Album cards show: title, artist, genre, year, track count

### ✅ Music Genres
- **URL:** `/music/genres`
- **What to check:**
  - Artists and albums grouped by genre:
    - Pop
    - Rock
    - Hip-Hop
    - Electronic
    - Jazz
    - Classical
    - Country
    - R&B

---

## Issue-Specific Testing

### Issue #1: Music Routes Not Working ✅ FIXED
**Before:** Artists and Albums pages showed error (Card component not found)
**After:** Both pages render properly with all cards displaying

**Test:**
1. Go to `/music/artists`
2. Should see 8 artist cards with images
3. Go to `/music/albums`
4. Should see 16 album cards with images

### Issue #2: No Video URLs ✅ FIXED
**Before:** No video URLs in data, clicking movies/series had nothing to play
**After:** All movies and series have demo video URLs

**Test:**
1. Open browser developer tools → Console
2. Check any movie object: `console.log(movies[0])`
3. Should see `videoUrl` property with value
4. Check any series object: `console.log(series[0])`
5. Should see `videoUrl` property with value

### Issue #3: Game Images Not Loading ✅ FIXED
**Before:** Unsplash images were not loading reliably
**After:** All games use Pexels images with game themes

**Test:**
1. Go to `/movie-games`
2. All 9 game cards should display images
3. Images should be game/movie themed
4. No broken image icons

### Issue #4: Some Thumbnails Not Loading ✅ FIXED
**Before:** Some external images might fail to load
**After:** Fallback system shows colored placeholders with titles

**Test:**
1. Browse all pages
2. If any image fails, should see colored placeholder
3. Placeholder should have appropriate color for content type

---

## Data Verification

### Movies Data
```javascript
// All 24 movies have:
{
    id: Number,
    title: String,
    genre: String,
    year: Number,
    rating: String,
    description: String,
    image: String, // TMDB URL
    videoUrl: String // Google demo video ✅ NEW
}
```

### Series Data
```javascript
// All 18 series have:
{
    id: Number,
    title: String,
    genre: String,
    seasons: Number,
    rating: String,
    description: String,
    image: String, // TMDB URL
    videoUrl: String // Google demo video ✅ NEW
}
```

### Games Data
```javascript
// All 9 games have:
{
    id: Number,
    title: String,
    category: String,
    players: String,
    rating: String,
    description: String,
    image: String // Pexels URL ✅ UPDATED
}
```

---

## Expected Results

### All Pages Should:
- ✅ Load without console errors
- ✅ Display all content cards
- ✅ Show images or fallback placeholders
- ✅ Have working navigation
- ✅ Be responsive on mobile

### Music Pages Should:
- ✅ Artists page renders with Card component
- ✅ Albums page renders with Card component
- ✅ All artist/album images visible
- ✅ Genre filtering works

### Movie/Series Pages Should:
- ✅ All thumbnails visible
- ✅ Each item has videoUrl in data
- ✅ Genre filtering works
- ✅ Ratings and metadata display

### Games Page Should:
- ✅ All 9 game images load
- ✅ Images are game-themed
- ✅ Grouped by category
- ✅ Rating and player info display

---

## Common Issues & Solutions

### If npm is not found:
```bash
# Install Node.js from nodejs.org
# Or use nvm:
nvm install node
nvm use node
```

### If dependencies are missing:
```bash
npm install
```

### If port is already in use:
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use different port
npm run dev -- --port 3000
```

### If images don't load:
- Check browser console for errors
- Verify internet connection
- Check if image URLs are accessible
- Fallback placeholders should appear

---

## Browser Testing

Recommended browsers:
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)

Mobile testing:
- ✅ iOS Safari
- ✅ Chrome Android

---

## Performance Checks

- [ ] All pages load in < 3 seconds
- [ ] Images use lazy loading
- [ ] No console errors
- [ ] No 404 errors for images
- [ ] Smooth navigation between pages
- [ ] Responsive on mobile devices

---

**Happy Testing! 🎬🎮🎵**
