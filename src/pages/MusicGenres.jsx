import { useState } from 'react';
import { Link } from 'react-router-dom';
import { musicGenres, getArtistsByGenre, getAlbumsByGenre } from '../data/musicData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

const SAMPLE_MUSIC_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function MusicGenres() {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const handleCardClick = (title, subtitle = '') => {
        const fullTitle = subtitle ? `${title} - ${subtitle}` : title;
        setSelectedContent({ title: fullTitle, url: SAMPLE_MUSIC_URL });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedContent(null), 300);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Music Genres</h1>

                {musicGenres.map(genre => {
                    const genreArtists = getArtistsByGenre(genre);
                    const genreAlbums = getAlbumsByGenre(genre);

                    if (genreArtists.length === 0 && genreAlbums.length === 0) return null;

                    return (
                        <section key={genre} style={{ marginBottom: '3rem' }}>
                            <h2 className="genre-title">{genre}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                {genreArtists.length} Artists • {genreAlbums.length} Albums
                            </p>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Artists</h3>
                            <div className="card-grid" style={{ marginBottom: '2rem' }}>
                                {genreArtists.map(artist => (
                                    <Card
                                        key={artist.id}
                                        title={artist.name}
                                        meta={artist.genre}
                                        rating={`👥 ${artist.followers}`}
                                        description={`${artist.albums} Albums`}
                                        type="music"
                                        image={artist.image}
                                        onClick={() => handleCardClick(artist.name, 'Live Performance')}
                                    />
                                ))}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}> Albums</h3>
                            <div className="card-grid">
                                {genreAlbums.map(album => (
                                    <Card
                                        key={album.id}
                                        title={album.title}
                                        meta={`${album.year}`}
                                        rating={`🎵 ${album.tracks}`}
                                        description={album.artist}
                                        type="music"
                                        image={album.image}
                                        onClick={() => handleCardClick(album.artist, album.title)}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/music" className="btn">
                        ← Back to Music Hub
                    </Link>
                </div>
            </div>

            {selectedContent && (
                <VideoPlayer
                    videoUrl={selectedContent.url}
                    title={selectedContent.title}
                    onClose={handleClosePlayer}
                    isOpen={isPlayerOpen}
                />
            )}
        </div>
    );
}

export default MusicGenres;
