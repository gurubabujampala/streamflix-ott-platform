import { useState } from 'react';
import { games, gameCategories } from '../data/gamesData';
import Card from '../components/common/Card';
import VideoPlayer from '../components/common/VideoPlayer';

const SAMPLE_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function MovieGames() {
    const [selectedContent, setSelectedContent] = useState(null);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const handleCardClick = (title) => {
        setSelectedContent({ title: `${title} - Game Demo`, url: SAMPLE_VIDEO_URL });
        setIsPlayerOpen(true);
    };

    const handleClosePlayer = () => {
        setIsPlayerOpen(false);
        setTimeout(() => setSelectedContent(null), 300);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Movie Games</h1>

                {gameCategories.map(category => {
                    const categoryGames = games.filter(game => game.category === category);

                    if (categoryGames.length === 0) return null;

                    return (
                        <section key={category} style={{ marginBottom: '3rem' }}>
                            <h2>{category}</h2>
                            <div className="card-grid">
                                {categoryGames.map(game => (
                                    <Card
                                        key={game.id}
                                        title={game.title}
                                        meta={`${game.category} • ${game.players} Players`}
                                        rating={game.rating}
                                        description={game.description}
                                        type="game"
                                        image={game.image}
                                        onClick={() => handleCardClick(game.title)}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
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

export default MovieGames;
