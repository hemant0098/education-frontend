import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-container">

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> info@educationhub.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> 123 Edu Street, Delhi, India</p>

          {/* Optional Google Map Embed */}
          <iframe 
            // src="https://www.google.com/maps/embed?pb=!1m18!..." 
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13973.20667623562!2d76.6105548!3d28.8893824!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747044062399!5m2!1sen!2sin"
            width="100%" height="180" 
            style={{ border:0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default Contact;
