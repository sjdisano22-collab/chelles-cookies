import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Custom cookies for every special occasion</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
