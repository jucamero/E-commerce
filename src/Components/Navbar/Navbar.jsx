import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
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
           <li onClick={()=> {Setmenu("home")}}><Link to="/">Inicio</Link>{menu==="home"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("shop")}}><Link to="/shop">Catálogo</Link>{menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("aboutUs")}}><Link to="/aboutus">Sobre Nosotros</Link>{menu==="aboutUs"?<hr/>:<></>}</li>
           <li onClick={()=> {Setmenu("contactUs")}}><Link to="/contactus">Contáctanos</Link>{menu==="contactUs"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" style={{width: '50px', height: '50px'}}/></Link>
          <div className="nav-bar-count">0</div>
        </div>
       

    </div>
    </div>
    
  )
}


export default Navbar
