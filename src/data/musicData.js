export const musicGenres = [
    'Pop',
    'Rock',
    'Hip-Hop',
    'Electronic',
    'Jazz',
    'Classical',
    'Country',
    'R&B'
];

export const artists = [
    {
        id: 1,
        name: 'Taylor Swift',
        genre: 'Pop',
        albums: 10,
        followers: '100M',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Queen',
        genre: 'Rock',
        albums: 15,
        followers: '40M',
        image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        name: 'Daft Punk',
        genre: 'Electronic',
        albums: 4,
        followers: '25M',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        name: 'Eminem',
        genre: 'Hip-Hop',
        albums: 11,
        followers: '60M',
        image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        name: 'Miles Davis',
        genre: 'Jazz',
        albums: 50,
        followers: '5M',
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        name: 'Beethoven',
        genre: 'Classical',
        albums: 100,
        followers: '10M',
        image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 7,
        name: 'Johnny Cash',
        genre: 'Country',
        albums: 60,
        followers: '15M',
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        name: 'Beyoncé',
        genre: 'R&B',
        albums: 7,
        followers: '80M',
        image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400&q=80'
    },
];

export const albums = [
    // Pop
    {
        id: 1,
        title: '1989',
        artist: 'Taylor Swift',
        genre: 'Pop',
        year: 2014,
        tracks: 13,
        image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        title: 'Midnights',
        artist: 'Taylor Swift',
        genre: 'Pop',
        year: 2022,
        tracks: 13,
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=400&q=80'
    },

    // Rock
    {
        id: 3,
        title: 'A Night at the Opera',
        artist: 'Queen',
        genre: 'Rock',
        year: 1975,
        tracks: 12,
        image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        title: 'News of the World',
        artist: 'Queen',
        genre: 'Rock',
        year: 1977,
        tracks: 11,
        image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=400&q=80'
    },

    // Electronic
    {
        id: 5,
        title: 'Discovery',
        artist: 'Daft Punk',
        genre: 'Electronic',
        year: 2001,
        tracks: 14,
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        title: 'Random Access Memories',
        artist: 'Daft Punk',
        genre: 'Electronic',
        year: 2013,
        tracks: 13,
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'
    },

    // Hip-Hop
    {
        id: 7,
        title: 'The Eminem Show',
        artist: 'Eminem',
        genre: 'Hip-Hop',
        year: 2002,
        tracks: 20,
        image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        title: 'Recovery',
        artist: 'Eminem',
        genre: 'Hip-Hop',
        year: 2010,
        tracks: 17,
        image: 'https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&w=400&q=80'
    },

    // Jazz
    {
        id: 9,
        title: 'Kind of Blue',
        artist: 'Miles Davis',
        genre: 'Jazz',
        year: 1959,
        tracks: 5,
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 10,
        title: 'Bitches Brew',
        artist: 'Miles Davis',
        genre: 'Jazz',
        year: 1970,
        tracks: 6,
        image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=400&q=80'
    },

    // Classical
    {
        id: 11,
        title: 'Symphony No. 9',
        artist: 'Beethoven',
        genre: 'Classical',
        year: 1824,
        tracks: 4,
        image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 12,
        title: 'Symphony No. 5',
        artist: 'Beethoven',
        genre: 'Classical',
        year: 1808,
        tracks: 4,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80'
    },

    // Country
    {
        id: 13,
        title: 'At Folsom Prison',
        artist: 'Johnny Cash',
        genre: 'Country',
        year: 1968,
        tracks: 16,
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 14,
        title: 'American IV',
        artist: 'Johnny Cash',
        genre: 'Country',
        year: 2002,
        tracks: 15,
        image: 'https://images.unsplash.com/photo-1483032469466-b937c425697b?auto=format&fit=crop&w=400&q=80'
    },

    // R&B
    {
        id: 15,
        title: 'Lemonade',
        artist: 'Beyoncé',
        genre: 'R&B',
        year: 2016,
        tracks: 12,
        image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 16,
        title: 'Renaissance',
        artist: 'Beyoncé',
        genre: 'R&B',
        year: 2022,
        tracks: 16,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=400&q=80'
    },
];

export const getArtistsByGenre = (genre) => {
    return artists.filter(artist => artist.genre === genre);
};

export const getAlbumsByArtist = (artistName) => {
    return albums.filter(album => album.artist === artistName);
};

export const getAlbumsByGenre = (genre) => {
    return albums.filter(album => album.genre === genre);
};
