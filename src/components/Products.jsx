import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Product from './Product';

import '../style/components/Products.css';

const Products = () => {
  // De este modo pasabamos antes la informacion mediante las props
  // const { products } = props;
  // destructuramos las variables que tenemos en el Contexto que creamos 
  // Ahora los productos(products) los vamos a sacar del estado(state)
  const { state: { products }, addToCart } = useContext(AppContext);
  
  // Funcion que se encarga de manejar agregar al carro de compras
  const handleAddToCart = (product) => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map( (product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products
