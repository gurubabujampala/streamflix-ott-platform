import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMoviesByGenre, genres } from '../data/moviesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

function MoviesByGenre() {
    const { genre } = useParams();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const genreCapitalized = genre.charAt(0).toUpperCase() + genre.slice(1);
    const filteredMovies = getMoviesByGenre(genreCapitalized);

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
                <h1 className="page-title">{genreCapitalized} Movies</h1>

                <div className="genre-filter">
                    <Link to="/movies" className="genre-btn">
                        All Movies
                    </Link>
                    {genres.map(g => (
                        <Link
                            key={g}
                            to={`/movies/${g.toLowerCase()}`}
                            className={`genre-btn ${g === genreCapitalized ? 'active' : ''}`}
                        >
                            {g}
                        </Link>
                    ))}
                </div>

                <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    {filteredMovies.length} {genreCapitalized} Movies
                </h2>
                <div className="card-grid">
                    {filteredMovies.map(movie => (
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

export default MoviesByGenre;
