import { useState } from 'react';
import { Link } from 'react-router-dom';
import { artists } from '../data/musicData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

// Using the same video for music demo - in real app this would be an audio player
const SAMPLE_MUSIC_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function Artists() {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const handleCardClick = (name) => {
        setSelectedContent({ title: `${name} - Live Performance`, url: SAMPLE_MUSIC_URL });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedContent(null), 300);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Artists</h1>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>All Artists</h2>
                <div className="card-grid">
                    {artists.map(artist => (
                        <Card
                            key={artist.id}
                            title={artist.name}
                            meta={artist.genre}
                            rating={`👥 ${artist.followers}`}
                            description={`${artist.albums} Albums`}
                            type="music"
                            image={artist.image}
                            onClick={() => handleCardClick(artist.name)}
                        />
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/music" className="btn">
                        ← Back to Music Hub
                    </Link>
                    <Link to="/music/genres" className="btn" style={{ marginLeft: '1rem' }}>
                        Browse by Genre
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

export default Artists;
