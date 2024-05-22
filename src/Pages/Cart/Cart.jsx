import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import carritoActions from "../../Slicers/Slicers"; // Importa las acciones del carrito
import './Cart.css';

const Cart = () => {
  const productosEnCarrito = useSelector(state => state.carrito.productos);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: ''
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePago = (e) => {
    e.preventDefault();
    // Lógica para procesar el pago
    console.log('Datos del formulario de pago:', formData);
  };

  // Calcular subtotal de pag
  const subtotal = productosEnCarrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toFixed(2);

  return (
    <div className="cart-container">
      <h2>¡Tus compras!</h2>
      {productosEnCarrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <ul>
            {productosEnCarrito.map(producto => (
              <li key={producto.id}>
                <img src={producto.image} alt={producto.title} />
                <div>
                  <h3>{producto.title}</h3>
                  <p>Precio: ${producto.price}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <button onClick={() => dispatch(carritoActions.eliminarDelCarrito(producto.id))}>
                    Eliminar del Carrito
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <p>Subtotal: ${subtotal}</p>
          </div>
          {/* Formulario de pago */}
          <form onSubmit={handlePago} className="payment-form">
            <h3>Detalles de Pago</h3>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" required />
            <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} placeholder="Apellido" required />
            <input type="text" name="numeroTarjeta" value={formData.numeroTarjeta} onChange={handleInputChange} placeholder="Número de Tarjeta" required />
            <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" required />
            <input type="text" name="fechaVencimiento" value={formData.fechaVencimiento} onChange={handleInputChange} placeholder="Fecha de Vencimiento (MM/YY)" required />
            <button type="submit">Pagar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;