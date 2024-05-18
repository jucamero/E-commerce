import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Tryshop. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><Link to ="/aboutus">Sobre nosotros</Link></li>
          <li><Link to="/contactus">Contacto</Link></li>
          <li><Link to="/privacy">Política de privacidad</Link></li>
          <li><Link to="/terms">Términos de servicio</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;