import { useState } from 'react';
import { Link } from 'react-router-dom';
import { albums } from '../data/musicData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

function Albums() {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const handleCardClick = (title, videoUrl) => {
        setSelectedContent({ title: `${title} - Music Video`, url: videoUrl });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedContent(null), 300);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Albums</h1>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>All Albums</h2>
                <div className="card-grid">
                    {albums.map(album => (
                        <Card
                            key={album.id}
                            title={album.title}
                            meta={`${album.artist} • ${album.year}`}
                            rating={`🎵 ${album.tracks} tracks`}
                            description={album.genre}
                            type="music"
                            image={album.image}
                            onClick={() => handleCardClick(album.title, album.videoUrl)}
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

export default Albums;
