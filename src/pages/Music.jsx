import { Link } from 'react-router-dom';

function Music() {
    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Music</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    Discover your next favorite artist, album, or genre
                </p>

                <div className="music-nav">
                    <Link to="/music/artists" className="music-nav-card">
                        <span className="music-nav-icon">🎤</span>
                        <h3>Artists</h3>
                        <p>Explore top artists from every genre</p>
                    </Link>

                    <Link to="/music/albums" className="music-nav-card">
                        <span className="music-nav-icon">💿</span>
                        <h3>Albums</h3>
                        <p>Browse the latest and greatest albums</p>
                    </Link>

                    <Link to="/music/genres" className="music-nav-card">
                        <span className="music-nav-icon">🎵</span>
                        <h3>Genres</h3>
                        <p>Find music by your favorite genre</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Music;
