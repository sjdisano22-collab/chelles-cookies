import ContactForm from '../components/ContactForm';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Let's create something beautiful together!</p>
      </div>

      <div className="contact-form-container">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
