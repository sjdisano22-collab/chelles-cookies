import { useEffect } from 'react';
import { galleryImages } from '../data/galleryImages';

const GalleryModal = ({ image, onClose, onNavigate }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleArrowKeys);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNavigate]);

  if (!image) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('gallery-modal')) {
      onClose();
    }
  };

  return (
    <div className="gallery-modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <button
          className="modal-nav-button modal-prev"
          onClick={() => onNavigate('prev')}
          aria-label="Previous image"
        >
          ‹
        </button>

        <img
          src={image.src}
          alt={image.alt}
          className="modal-image"
        />

        <button
          className="modal-nav-button modal-next"
          onClick={() => onNavigate('next')}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="modal-caption">
          <h3>{image.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
