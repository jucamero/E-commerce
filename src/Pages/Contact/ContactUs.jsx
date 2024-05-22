import React from 'react';
import './ContactUs.css';
import whatsappLogo from '../../Components/Assets/whatsapp.png'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contáctanos</h1>
      <form className="contact-form">
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <div className="whatsapp-link">
        <a href="https://wa.me/+573105169931" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="WhatsApp Logo" className="whatsapp-logo" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactUs;