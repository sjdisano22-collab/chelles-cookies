const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero-section" id="home">
      <div className="hero-decoration"></div>
      <div className="hero-decoration"></div>

      <div className="hero-content">
        <h1 className="hero-title">Chelle's Cookies</h1>
        <p className="hero-tagline">
          Elegantly crafted cookies for life's special moments
        </p>
        <button className="hero-cta" onClick={scrollToGallery}>
          View Gallery
        </button>
      </div>
    </div>
  );
};

export default Hero;
