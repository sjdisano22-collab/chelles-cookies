import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const eventTypes = [
    'Baby Shower',
    'Bridal Shower',
    'Birthday Party',
    "Valentine's Day",
    'Holiday Event',
    'Custom Order',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({
        type: 'error',
        text: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual email service integration)
    try {
      // TODO: Integrate with EmailJS or Formspree here
      // For now, just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your inquiry! We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventType" className="form-label">
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          className="form-select"
          value={formData.eventType}
          onChange={handleChange}
        >
          <option value="">Select an event type...</option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="eventDate" className="form-label">
          Event Date
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          className="form-input"
          value={formData.eventDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your vision for your custom cookies..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>

      {submitMessage.text && (
        <div className={`form-message ${submitMessage.type}`}>
          {submitMessage.text}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
