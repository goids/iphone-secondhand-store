import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import handleSumTotal from '../utils/index';
import AppContext from '../context/AppContext';

import '../style/components/Checkout.css';

const Checkout = () => {
  const {state: { cart }, removeToCart} = useContext(AppContext);

  const handleRemoveToCart = (product) => () => {
    removeToCart(product);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {/* cart.length > 0 ? <h3>List of Products: </h3> : <h3> No products: </h3> */}
        <h3>{cart.length > 0 ? `List of Products:` : `No products: `}</h3>
        {cart.map( (item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{`${item.title}`}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={handleRemoveToCart(item)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Price Total: $${handleSumTotal(cart)}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'> Buy Products</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
