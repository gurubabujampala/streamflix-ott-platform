export const gameCategories = [
    'Trivia',
    'Quiz',
    'Puzzle',
    'Adventure'
];

export const games = [
    // Trivia Games
    {
        id: 1,
        title: 'Movie Trivia Challenge',
        category: 'Trivia',
        players: '1-4',
        rating: '8.2',
        description: 'Test your movie knowledge with this fun trivia game!',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.crazygames.com/game/movie-trivia' // Free movie trivia game
    },
    {
        id: 2,
        title: 'Scene It! Ultimate',
        category: 'Trivia',
        players: '2-4',
        rating: '8.5',
        description: 'Identify famous movie scenes and characters!',
        image: 'https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.arkadium.com/games/movie-trivia/' // Free browser trivia game
    },
    {
        id: 3,
        title: 'Quote Quest',
        category: 'Trivia',
        players: '1+',
        rating: '7.9',
        description: 'Match famous movie quotes to their films!',
        image: 'https://images.pexels.com/photos/8111833/pexels-photo-8111833.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.sporcle.com/games/category/movies' // Free movie quote quizzes
    },

    // Quiz Games
    {
        id: 4,
        title: 'Character Challenge',
        category: 'Quiz',
        players: '1-2',
        rating: '8.3',
        description: 'How well do you know your favorite movie characters?',
        image: 'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.jetpunk.com/quizzes/movie-characters' // Free character quiz
    },
    {
        id: 5,
        title: 'Director\'s Cut',
        category: 'Quiz',
        players: '1+',
        rating: '7.8',
        description: 'Match directors to their iconic films!',
        image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.purposegames.com/game/movie-directors-quiz' // Free directors quiz
    },

    // Puzzle Games
    {
        id: 6,
        title: 'Poster Puzzle',
        category: 'Puzzle',
        players: '1',
        rating: '8.0',
        description: 'Reconstruct iconic movie posters piece by piece!',
        image: 'https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.jigsawplanet.com/?t=movies' // Free jigsaw puzzles with movie themes
    },
    {
        id: 7,
        title: 'Scene Scramble',
        category: 'Puzzle',
        players: '1',
        rating: '7.7',
        description: 'Unscramble famous movie scenes!',
        image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.wordgames.com/scramble.html' // Free word scramble game
    },

    // Adventure Games
    {
        id: 8,
        title: 'Hollywood Quest',
        category: 'Adventure',
        players: '1',
        rating: '8.4',
        description: 'Embark on a journey through movie history!',
        image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.kongregate.com/games/categories/adventure' // Free adventure games
    },
    {
        id: 9,
        title: 'Studio Simulator',
        category: 'Adventure',
        players: '1',
        rating: '8.1',
        description: 'Build your own movie studio empire!',
        image: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.newgrounds.com/portal/view/460947' // Free movie studio simulation game
    },
];

export const getGamesByCategory = (category) => {
    return games.filter(game => game.category === category);
};
