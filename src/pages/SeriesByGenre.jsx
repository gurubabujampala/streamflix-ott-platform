import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSeriesByGenre, seriesGenres } from '../data/seriesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

const SAMPLE_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function SeriesByGenre() {
    const { genre } = useParams();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const genreCapitalized = genre.charAt(0).toUpperCase() + genre.slice(1);
    const filteredSeries = getSeriesByGenre(genreCapitalized);

    const handleCardClick = (title) => {
        setSelectedVideo({ title, url: SAMPLE_VIDEO_URL });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedVideo(null), 300);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">{genreCapitalized} Web Series</h1>

                <div className="genre-filter">
                    <Link to="/web-series" className="genre-btn">
                        All Series
                    </Link>
                    {seriesGenres.map(g => (
                        <Link
                            key={g}
                            to={`/web-series/${g.toLowerCase()}`}
                            className={`genre-btn ${g === genreCapitalized ? 'active' : ''}`}
                        >
                            {g}
                        </Link>
                    ))}
                </div>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    {filteredSeries.length} {genreCapitalized} Series
                </h2>
                <div className="card-grid">
                    {filteredSeries.map(series => (
                        <Card
                            key={series.id}
                            title={series.title}
                            meta={`${series.genre} • ${series.seasons} Seasons`}
                            rating={series.rating}
                            description={series.description}
                            type="series"
                            image={series.image}
                            onClick={() => handleCardClick(series.title)}
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

export default SeriesByGenre;
