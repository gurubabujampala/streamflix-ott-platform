import { useState } from 'react';
import { Link } from 'react-router-dom';
import { genres, movies } from '../data/moviesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

const SAMPLE_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function Movies() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

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
                <h1 className="page-title">Movies</h1>

                <div className="genre-filter">
                    {genres.map(genre => (
                        <Link
                            key={genre}
                            to={`/movies/${genre.toLowerCase()}`}
                            className="genre-btn"
                        >
                            {genre}
                        </Link>
                    ))}
                </div>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>All Movies</h2>
                <div className="card-grid">
                    {movies.map(movie => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            meta={`${movie.genre} • ${movie.year}`}
                            rating={movie.rating}
                            description={movie.description}
                            type="movie"
                            image={movie.image}
                            onClick={() => handleCardClick(movie.title)}
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

export default Movies;
