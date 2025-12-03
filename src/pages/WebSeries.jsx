import { useState } from 'react';
import { Link } from 'react-router-dom';
import { seriesGenres, series } from '../data/seriesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

function WebSeries() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

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
            <div className="container">
                <h1 className="page-title">Web Series</h1>

                <div className="genre-filter">
                    {seriesGenres.map(genre => (
                        <Link
                            key={genre}
                            to={`/web-series/${genre.toLowerCase()}`}
                            className="genre-btn"
                        >
                            {genre}
                        </Link>
                    ))}
                </div>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>All Series</h2>
                <div className="card-grid">
                    {series.map(s => (
                        <Card
                            key={s.id}
                            title={s.title}
                            meta={`${s.genre} • ${s.seasons} Seasons`}
                            rating={s.rating}
                            description={s.description}
                            type="series"
                            image={s.image}
                            onClick={() => handleCardClick(s.title, s.videoUrl)}
                        />
                    ))}
                </div>
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

export default WebSeries;
