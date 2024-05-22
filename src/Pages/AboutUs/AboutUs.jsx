import React from 'react'
import './AboutUs.css'
import banner from '../../Components/Assets/banner.jpeg'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-content">
        <p>
          Bienvenido a <strong>TryShop</strong>, tu tienda de confianza
        </p>
        <p>
          Nuestra misión es brindar productos excepcionales a precios competitivos, siempre con un enfoque en la calidad y la innovación. Nos enorgullece contar con un equipo dedicado y apasionado que se compromete a superar tus expectativas.
        </p>
        <p>
          Gracias por elegir TryShop.
        </p>
      </section>
      <section className="about-us-image">
        <img src= {banner} alt="" />
      </section>
    </div>
  );
};

export default AboutUs