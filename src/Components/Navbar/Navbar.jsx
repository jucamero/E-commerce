import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='main-container'>
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" style={{width: '50px', height: '50px'}}/>
            <p>TryShop</p>
        </div>
        <ul className="nav-menu">
           <li>Ofertas</li>
           <li>Catálogo</li>
           <li>Contacto</li>
           <li>Ver más</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" style={{width: '50px', height: '50px'}}/>
          <div className="nav-bar-count">0</div>
        </div>
       

    </div>
    </div>
    
  )
}


export default Navbar
