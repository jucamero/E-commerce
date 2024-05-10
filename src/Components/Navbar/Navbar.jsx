import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

  const [menu,Setmenu] = useState("shop");
  return (
    <div className='main-container'>
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" style={{width: '50px', height: '50px'}}/>
            <p>TryShop</p>
        </div>
        <ul className="nav-menu">
           <li onClick={()=> {Setmenu("home")}}>Inicio{menu==="home"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("shop")}}>Catálogo{menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("aboutUs")}}>Sobre Nosotros{menu==="aboutUs"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("contactUs")}}>Contáctanos{menu==="contactUs"?<hr/>:<></>}</li>
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
