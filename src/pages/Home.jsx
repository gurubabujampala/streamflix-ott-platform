import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedMovies } from '../data/moviesData';
import { getFeaturedSeries } from '../data/seriesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

function Home() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const featuredMovies = getFeaturedMovies().slice(0, 4);
    const featuredSeries = getFeaturedSeries().slice(0, 4);

    const handleCardClick = (title, videoUrl) => {
        setSelectedVideo({ title, url: videoUrl });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedVideo(null), 300);
    };

    return (
        <div className="page">
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome to StreamFlix</h1>
                    <p>Your Ultimate Entertainment Destination</p>
                    <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
                        Explore movies, web series, games, and music all in one place
                    </p>
                </div>
            </div>

            <div className="container">
                <section style={{ marginTop: '3rem' }}>
                    <h2>Featured Movies</h2>
                    <div className="card-grid">
                        {featuredMovies.map(movie => (
                            <Card
                                key={movie.id}
                                title={movie.title}
                                meta={`${movie.genre} • ${movie.year}`}
                                rating={movie.rating}
                                description={movie.description}
                                type="movie"
                                image={movie.image}
                                onClick={() => handleCardClick(movie.title, movie.videoUrl)}
                            />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/movies" className="btn">
                            Browse All Movies →
                        </Link>
                    </div>
                </section>

                <section style={{ marginTop: '4rem' }}>
                    <h2>Featured Web Series</h2>
                    <div className="card-grid">
                        {featuredSeries.map(series => (
                            <Card
                                key={series.id}
                                title={series.title}
                                meta={`${series.genre} • ${series.seasons} Seasons`}
                                rating={series.rating}
                                description={series.description}
                                type="series"
                                image={series.image}
                                onClick={() => handleCardClick(series.title, series.videoUrl)}
                            />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/web-series" className="btn">
                            Browse All Series →
                        </Link>
                    </div>
                </section>

                <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                    <h2>Explore More</h2>
                    <div className="music-nav">
                        <Link to="/movie-games" className="music-nav-card">
                            <span className="music-nav-icon">🎮</span>
                            <h3>Movie Games</h3>
                            <p>Test your cinema knowledge with interactive games</p>
                        </Link>
                        <Link to="/music" className="music-nav-card">
                            <span className="music-nav-icon">🎵</span>
                            <h3>Music</h3>
                            <p>Discover artists, albums, and playlists</p>
                        </Link>
                    </div>
                </section>
            </div>

            {selectedVideo && (
                <VideoPlayer
                    videoUrl={selectedVideo.url}
                    title={selectedVideo.title}
                    onClose={handleClosePlayer}
                    isOpen={isPlayerOpen}
                />
            )}
        </div>
    );
}

export default Home;
