# StreamFlix - Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE LAYER                         │
│                                                                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│  │   Header   │  │   Pages    │  │ Components │  │   Footer   │   │
│  │            │  │  - Home    │  │  - Card    │  │            │   │
│  │  - Logo    │  │  - Movies  │  │  - Video   │  │ Copyright  │   │
│  │  - Nav     │  │  - Series  │  │    Player  │  │            │   │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘   │
│                                                                      │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      APPLICATION LOGIC LAYER                         │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                     React Router                             │   │
│  │  Routes: /, /movies, /web-series, /music, etc.              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                   State Management                           │   │
│  │  - useState hooks (video player state)                       │   │
│  │  - Event handlers (click, close)                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          DATA LAYER                                  │
│                                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Movies   │  │ Series   │  │  Games   │  │  Music   │           │
│  │  Data    │  │  Data    │  │  Data    │  │  Data    │           │
│  │          │  │          │  │          │  │          │           │
│  │ 24 items │  │ 18 items │  │  9 items │  │  8+16    │           │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              Helper Functions                                │   │
│  │  - getMoviesByGenre()                                        │   │
│  │  - getFeaturedMovies()                                       │   │
│  │  - getSeriesByGenre()                                        │   │
│  │  - getArtistsByGenre()                                       │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Component Interaction Flow

```
User Action: Click Movie Card
         │
         ▼
┌────────────────────┐
│  Card Component    │ onClick={handleCardClick}
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│  Page Component    │ setState({ selectedVideo, isPlayerOpen: true })
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│ VideoPlayer Modal  │ Renders with video URL
└────────┬───────────┘
         │
         │ Auto-play video
         │ User watches
         │
         ▼
┌────────────────────┐
│ User Closes Modal  │ onClose()
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│  Page Component    │ setState({ selectedVideo: null, isPlayerOpen: false })
└────────────────────┘
```

## Data Flow Diagram

```
Static Data (movies.js)
         │
         ▼
Component Import
         │
         ▼
Filter/Transform (if needed)
         │
         ▼
Map to Card Components
         │
         ▼
Render Card Grid
         │
         │ User Click
         ▼
Extract Video Info
         │
         ▼
Pass to VideoPlayer
         │
         ▼
Display Video
```

## File Structure Tree

```
ott-platform/
│
├── public/
│   ├── manifest.json           # PWA config
│   └── vite.svg               # Favicon
│
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── Card.jsx       # Reusable card
│   │       ├── Header.jsx     # Nav header
│   │       ├── Footer.jsx     # App footer
│   │       └── VideoPlayer.jsx # Video modal
│   │
│   ├── data/
│   │   ├── moviesData.js      # 24 movies
│   │   ├── seriesData.js      # 18 series
│   │   ├── gamesData.js       # 9 games
│   │   └── musicData.js       # 8 artists, 16 albums
│   │
│   ├── pages/
│   │   ├── Home.jsx          # Landing
│   │   ├── Movies.jsx        # All movies
│   │   ├── MoviesByGenre.jsx # Filtered movies
│   │   ├── WebSeries.jsx     # All series
│   │   ├── SeriesByGenre.jsx # Filtered series
│   │   ├── MovieGames.jsx    # Games
│   │   ├── Music.jsx         # Music hub
│   │   ├── Artists.jsx       # Artists list
│   │   ├── Albums.jsx        # Albums list
│   │   └── MusicGenres.jsx   # Music by genre
│   │
│   ├── styles/
│   │   └── index.css         # Global styles
│   │
│   ├── App.jsx               # Router config
│   └── main.jsx              # Entry point
│
├── docs/
│   ├── README.md             # Docs index
│   ├── USER_GUIDE.md         # User docs
│   ├── DEVELOPER_GUIDE.md    # Dev docs
│   ├── TECHNICAL_DOCUMENTATION.md
│   └── COMPONENT_API.md      # API reference
│
├── index.html                # HTML template
├── vite.config.js           # Vite config
├── package.json             # Dependencies
└── README.md                # Main readme
```

---

**Last Updated**: December 3, 2025
