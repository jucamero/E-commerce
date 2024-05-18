import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import carritoActions from "../../Slicers/Slicers"; // Importa las acciones del carrito

const Cart = () => {
  const productosEnCarrito = useSelector(state => state.carrito.productos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {productosEnCarrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;