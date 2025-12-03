import { games, gameCategories } from '../data/gamesData';
import Card from '../components/common/Card';

function MovieGames() {
    const handleGameClick = (gameUrl) => {
        // Open game in new tab
        window.open(gameUrl, '_blank');
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Movie Games</h1>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    Click any game to play free browser-based movie games!
                </p>

                {gameCategories.map(category => {
                    const categoryGames = games.filter(game => game.category === category);
                    if (categoryGames.length === 0) return null;

                    return (
                        <section key={category} style={{ marginBottom: '3rem' }}>
                            <h2>{category} Games</h2>
                            <div className="card-grid">
                                {categoryGames.map(game => (
                                    <Card
                                        key={game.id}
                                        title={game.title}
                                        meta={`${game.category} • ${game.players} players`}
                                        rating={game.rating}
                                        description={game.description}
                                        type="game"
                                        image={game.image}
                                        onClick={() => handleGameClick(game.videoUrl)}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default MovieGames;
