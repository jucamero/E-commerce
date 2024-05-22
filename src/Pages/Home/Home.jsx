import React from 'react'
import './Home.css'
import fotohome from '../../Components/Assets/sale.webp'

const Home = () => {
  return (
    <div className="home-container">
    <div className="home">
      <h2>Bienvenido a TryShop</h2>
      <p>Encuentra las mejores ofertas y productos en nuestro catálogo.</p>
    </div>
    <div className="about-us-image">
        <img src= {fotohome} alt="" />
      </div>
    </div>
  );
};
export default Home