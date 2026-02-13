const ServiceIcon = ({ iconName }) => {
  const icons = {
    baby: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="3" />
        <path d="M12 12c-4 0-6 2-6 5v2h12v-2c0-3-2-5-6-5z" />
      </svg>
    ),
    ring: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    cake: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21H4v-8h16v8z" />
        <path d="M4 13s1-2 4-2 4 2 4 2 1-2 4-2 4 2 4 2" />
        <line x1="8" y1="10" x2="8" y2="13" />
        <line x1="12" y1="10" x2="12" y2="13" />
        <line x1="16" y1="10" x2="16" y2="13" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    gift: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="12" />
        <path d="M12 10V22" />
        <path d="M3 10h18" />
        <path d="M7 10C7 7 9 5 12 5s5 2 5 5" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.5 7h7.5l-6 5 2.5 7-6-5-6 5 2.5-7-6-5h7.5z" />
      </svg>
    ),
  };

  return icons[iconName] || icons.star;
};

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-themes">
        {service.themes.map((theme, index) => (
          <span key={index} className="service-theme-tag">
            {theme}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
