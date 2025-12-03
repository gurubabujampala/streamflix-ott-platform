export const gameCategories = [
    'Trivia',
    'Quiz',
    'Puzzle',
    'Adventure'
];

export const games = [
    // Trivia
    {
        id: 1,
        title: 'Movie Master',
        category: 'Trivia',
        players: '1-4',
        rating: '8.2',
        description: 'Test your movie knowledge!',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 2,
        title: 'Scene It! Ultimate',
        category: 'Trivia',
        players: '1-6',
        rating: '8.0',
        description: 'Identify famous movie scenes.',
        image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 3,
        title: 'Quote Quest',
        category: 'Trivia',
        players: '2-8',
        rating: '7.8',
        description: 'Guess the movie from the quote.',
        image: 'https://images.pexels.com/photos/8111179/pexels-photo-8111179.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Quiz
    {
        id: 4,
        title: 'Character Challenge',
        category: 'Quiz',
        players: '1-4',
        rating: '8.3',
        description: 'Name that character!',
        image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 5,
        title: 'Director\'s Cut',
        category: 'Quiz',
        players: '1-2',
        rating: '7.9',
        description: 'Match directors to their films.',
        image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Puzzle
    {
        id: 6,
        title: 'Poster Puzzle',
        category: 'Puzzle',
        players: '1-2',
        rating: '7.5',
        description: 'Reconstruct iconic movie posters.',
        image: 'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 7,
        title: 'Scene Scramble',
        category: 'Puzzle',
        players: '1-4',
        rating: '7.7',
        description: 'Put scenes in the right order.',
        image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Adventure
    {
        id: 8,
        title: 'Hollywood Quest',
        category: 'Adventure',
        players: '1',
        rating: '8.5',
        description: 'Journey through cinema history.',
        image: 'https://images.pexels.com/photos/9072316/pexels-photo-9072316.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 9,
        title: 'Studio Simulator',
        category: 'Adventure',
        players: '1',
        rating: '8.1',
        description: 'Build your own movie empire.',
        image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
];

export const getGamesByCategory = (category) => {
    return games.filter(game => game.category === category);
};
