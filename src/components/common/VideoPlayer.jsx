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

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="video-modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2 className="video-modal-title">{title}</h2>
                <div className="video-container">
                    <video
                        controls
                        autoPlay
                        src={videoUrl}
                        className="video-player"
                    >
                        Your browser does not support the video tag.
                    </video>
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
