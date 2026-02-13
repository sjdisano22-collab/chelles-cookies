import { galleryImages } from '../data/galleryImages';

const GalleryGrid = ({ onImageClick }) => {
  return (
    <div className="gallery-grid">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="gallery-card"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
