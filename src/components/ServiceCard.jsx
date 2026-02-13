const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
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
