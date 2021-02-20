import React from 'react'

const Product = (props) => {
  const { product, handleAddToCart } = props;
  return (
    <div className="Products-item">
      <div className='Products-item-info'>
        <h2>
          {product.title}
          <span>
            $
            {' '}
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
      <button type='button' onClick={handleAddToCart(product)}> Comprar </button>
    </div>
  );
};

export default Product
