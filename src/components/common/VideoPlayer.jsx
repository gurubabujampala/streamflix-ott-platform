import { useEffect } from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ videoUrl, title, onClose, isOpen }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Check if URL is a YouTube link
    const isYouTube = videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
    
    // Extract YouTube video ID and create embed URL
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return '';
        
        let videoId = '';
        
        // Handle different YouTube URL formats
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1]?.split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0];
        } else if (url.includes('youtube.com/embed/')) {
            videoId = url.split('embed/')[1]?.split('?')[0];
        }
        
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
    };

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="video-modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2 className="video-modal-title">{title}</h2>
                <div className="video-container">
                    {isYouTube ? (
                        <iframe
                            className="video-player"
                            src={getYouTubeEmbedUrl(videoUrl)}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video
                            className="video-player"
                            controls
                            autoPlay
                            src={videoUrl}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default VideoPlayer;
