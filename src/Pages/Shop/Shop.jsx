import './Shop.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import accionesDelCarrito from "../../Slicers/Slicers";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productCounters, setProductCounters] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        // Inicializa el contador del producto
        const counters = {};
        data.forEach(product => {
          counters[product.id] = 0;
        });
        setProductCounters(counters);
      } catch (error) {
        console.error('Error ', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAgregarAlCarrito = (product) => {
    console.log("Agregando al carrito", product.id);
    dispatch(accionesDelCarrito.agregarAlCarrito(product));
    // Incrementa el contador del producto:
    setProductCounters(prevCounters => ({
      ...prevCounters,
      [product.id]: prevCounters[product.id] + 1
    }));
  };

  return (
    <div className="shop-container">
      <h2>Productos</h2>
      {loading ? (
        <p className='loading'>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
              
              <button
                className="button"
                onClick={() => handleAgregarAlCarrito(product)}>Añadir</button>
                <p className="quantity">Cantidad: {productCounters[product.id]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;