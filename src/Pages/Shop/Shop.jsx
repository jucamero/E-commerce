import './Shop.css'
import React, { useState, useEffect } from 'react'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

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

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;