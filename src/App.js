
import './App.css';
import Navbar from './Components/Navbar/Navbar';

//Hay que instalar la ruta npm install react-router-dom para poder hacer uso de BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/Contact/ContactUs';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
