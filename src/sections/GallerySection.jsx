import { useState } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import GalleryModal from '../components/GalleryModal';
import { galleryImages } from '../data/galleryImages';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNavigate = (direction) => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>Cookie Gallery</h2>
        <p>Explore our collection of handcrafted royal icing cookies</p>
      </div>

      <GalleryGrid onImageClick={handleImageClick} />

      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};

export default GallerySection;
