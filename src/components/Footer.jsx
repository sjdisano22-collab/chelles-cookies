const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://instagram.com"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            📷
          </a>
          <a
            href="https://facebook.com"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            👍
          </a>
        </div>

        <ul className="footer-nav">
          <li className="footer-nav-link" onClick={() => scrollToSection('home')}>
            Home
          </li>
          <li className="footer-nav-link" onClick={() => scrollToSection('about')}>
            About
          </li>
          <li className="footer-nav-link" onClick={() => scrollToSection('gallery')}>
            Gallery
          </li>
          <li className="footer-nav-link" onClick={() => scrollToSection('services')}>
            Services
          </li>
          <li className="footer-nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </li>
        </ul>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Chelle's Cookies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
