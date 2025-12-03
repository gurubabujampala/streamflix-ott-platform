import { useState } from 'react';
import { Link } from 'react-router-dom';
import { albums } from '../data/musicData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

const SAMPLE_MUSIC_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function Albums() {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const handleCardClick = (title, artist) => {
        setSelectedContent({ title: `${artist} - ${title}`, url: SAMPLE_MUSIC_URL });
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

                <div className="card-grid">
                    {albums.map(album => (
                        <Card
                            key={album.id}
                            title={album.title}
                            meta={`${album.year} • ${album.genre}`}
                            rating={`🎵 ${album.tracks} tracks`}
                            description={album.artist}
                            type="music"
                            image={album.image}
                            onClick={() => handleCardClick(album.title, album.artist)}
                        />
                    ))}
                </div>

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

export default Albums;
