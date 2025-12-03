export const seriesGenres = [
    'Action',
    'Drama',
    'Comedy',
    'Thriller',
    'Sci-Fi',
    'Horror',
    'Mystery',
    'Fantasy'
];

export const series = [
    // Action
    {
        id: 1,
        title: 'The Boys',
        genre: 'Action',
        seasons: 4,
        rating: '8.7',
        description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
        image: 'https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=06rueu_fh30'
    },
    {
        id: 2,
        title: 'The Mandalorian',
        genre: 'Action',
        seasons: 3,
        rating: '8.7',
        description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        image: 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=aOC8E8z_ifw'
    },

    // Drama
    {
        id: 3,
        title: 'Breaking Bad',
        genre: 'Drama',
        seasons: 5,
        rating: '9.5',
        description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
        image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY'
    },
    {
        id: 4,
        title: 'Succession',
        genre: 'Drama',
        seasons: 4,
        rating: '8.9',
        description: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.',
        image: 'https://image.tmdb.org/t/p/w500/7T5Oko8gu57AM0b3grWvZ3tQeDN.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=OdYS8RRxBHg'
    },
    {
        id: 5,
        title: 'The Crown',
        genre: 'Drama',
        seasons: 6,
        rating: '8.6',
        description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
        image: 'https://image.tmdb.org/t/p/w500/1E5baAAmy5E1HCQN0SXyugIu0b2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=JWtnJjn6ng0'
    },

    // Comedy
    {
        id: 6,
        title: 'The Office',
        genre: 'Comedy',
        seasons: 9,
        rating: '9.0',
        description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        image: 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=LHOtME2DL4g'
    },
    {
        id: 7,
        title: 'Ted Lasso',
        genre: 'Comedy',
        seasons: 3,
        rating: '8.8',
        description: 'American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team.',
        image: 'https://image.tmdb.org/t/p/w500/93vYq6PnUH54A9U5CgOQY6v8Npx.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3u7EIiohs6U'
    },

    // Thriller
    {
        id: 8,
        title: 'Mindhunter',
        genre: 'Thriller',
        seasons: 2,
        rating: '8.6',
        description: 'Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.',
        image: 'https://image.tmdb.org/t/p/w500/fbKE87mlTJMuyO5n9DAtI52UhD5.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=oMJRRxmPSNs'
    },
    {
        id: 9,
        title: 'Squid Game',
        genre: 'Thriller',
        seasons: 1,
        rating: '8.0',
        description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.',
        image: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4'
    },

    // Sci-Fi
    {
        id: 10,
        title: 'Stranger Things',
        genre: 'Sci-Fi',
        seasons: 4,
        rating: '8.7',
        description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        image: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU'
    },
    {
        id: 11,
        title: 'Black Mirror',
        genre: 'Sci-Fi',
        seasons: 6,
        rating: '8.7',
        description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
        image: 'https://image.tmdb.org/t/p/w500/5UaYs56kUPuDUtkdpjvpqHgC2eD.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=di6emt8_ie8'
    },
    {
        id: 12,
        title: 'Westworld',
        genre: 'Sci-Fi',
        seasons: 4,
        rating: '8.5',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged.',
        image: 'https://image.tmdb.org/t/p/w500/805DNccg3pMwJ8X0aF4d6B2JjC3.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=eX3u0IlBBO4'
    },

    // Horror
    {
        id: 13,
        title: 'The Haunting of Hill House',
        genre: 'Horror',
        seasons: 1,
        rating: '8.6',
        description: 'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.',
        image: 'https://image.tmdb.org/t/p/w500/387oF5z9xU5cPQ3u5wH17l6l6Q.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3eqxXqJDmcY'
    },
    {
        id: 14,
        title: 'American Horror Story',
        genre: 'Horror',
        seasons: 12,
        rating: '8.0',
        description: 'An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp.',
        image: 'https://image.tmdb.org/t/p/w500/tiu2r8WkY5h5y5h5y5h5y5h5y5.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=uv7TkvX8e6w'
    },

    // Mystery
    {
        id: 15,
        title: 'Sherlock',
        genre: 'Mystery',
        seasons: 4,
        rating: '9.1',
        description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
        image: 'https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=xK7S9mrFWL4'
    },
    {
        id: 16,
        title: 'True Detective',
        genre: 'Mystery',
        seasons: 4,
        rating: '8.9',
        description: 'Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.',
        image: 'https://image.tmdb.org/t/p/w500/aARI1N8Xy1k4bV1X4bV1X4bV1X4.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TXwCoNwBSkQ'
    },

    // Fantasy
    {
        id: 17,
        title: 'Game of Thrones',
        genre: 'Fantasy',
        seasons: 8,
        rating: '9.2',
        description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        image: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=KPLWWIOCOOQ'
    },
    {
        id: 18,
        title: 'The Witcher',
        genre: 'Fantasy',
        seasons: 3,
        rating: '8.0',
        description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
        image: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ndl1W4ltcmg'
    },
];

export const getSeriesByGenre = (genre) => {
    return series.filter(s => s.genre === genre);
};

export const getFeaturedSeries = () => {
    return series.filter(s => parseFloat(s.rating) >= 9.0);
};
