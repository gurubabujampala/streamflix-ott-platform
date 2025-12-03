import PropTypes from 'prop-types';

function Card({ title, meta, rating, description, type = 'movie', image, onClick }) {
    // Fallback image generator using placehold.co
    const getPlaceholderImage = () => {
        if (image) return image;

        const encodedTitle = encodeURIComponent(title);
        let bgColor = '141414'; // Default dark
        let textColor = 'E50914'; // Netflix Red

        switch (type) {
            case 'movie':
                bgColor = '221f1f';
                textColor = 'E50914';
                break;
            case 'series':
                bgColor = '1f2937';
                textColor = '46d369'; // Green
                break;
            case 'game':
                bgColor = '312e81';
                textColor = 'FFD700'; // Yellow
                break;
            case 'music':
                bgColor = '831843';
                textColor = 'ffffff';
                break;
        }

        return `https://placehold.co/400x600/${bgColor}/${textColor}?text=${encodedTitle}`;
    };

    return (
        <div className="card fade-in" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <div className="card-image-container">
                <img
                    src={getPlaceholderImage()}
                    alt={title}
                    className="card-image"
                    loading="lazy"
                />
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-meta">
                        <span>{meta}</span>
                        {rating && <span className="card-rating">⭐ {rating}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    rating: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
};

export default Card;
