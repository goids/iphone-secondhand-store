import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AppContext from '../context/AppContext';

import '../style/components/Information.css';

const Information = (props) => {
  // props.history.goBack()
  const { state: {cart}, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    // Vamos a usar formData para leer cada una de la información que tenemos en los inputs
    // form.current es para usar la referencia de todo lo que estamos trabajando en el formulario
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'phone': formData.get('phone'),
      'state': formData.get('state'),
      'cp': formData.get('cp')
    }
    addToBuyer(buyer);
    history.push('/checkout/payments');
  }

  return(
    <>
      <Helmet>
        <title>Goide Store - Information</title>
        <meta property="og:title" content="Goide Store - Information" />
        <meta property="og:description" content="Goide Store - Information" />
        <meta property="og:url" content="goidestore.xyz"  />
        <meta property="og:site_name" content="Goide Store - Information"  />
        <meta property="og:locale" content="es_ES"  />
        <meta property="og:type" content="article"  />
      </Helmet>
      <div className="Information">
        <div className="Information-content"> 
          <div className="information-head">
            <h2>Information of contact:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type='text' name='name' placeholder='Full Name' />
              <input type="email" name='email' placeholder='Email' />
              <input type="text" name='address' placeholder='Address' />
              <input type="text" name='apto' placeholder='Number house' />
              <input type="text" name='city' placeholder='City' />
              <input type="text" name='country' placeholder='Country' />
              <input type="text" name='phone' placeholder='Telephone' />
              <input type="text" name='state' placeholder='State' />
              <input type="text" name='cp' placeholder='Postal Code' />
            </form>
          </div>
          <div className="Information-buttons">
            <div className='Information-back'>
              <button type='button' className='sin-estilo' onClick={() => props.history.goBack()}>
                Back 
              </button> 
            </div>
            <div className='Information-next'> 
              <button type='button' onClick={handleSubmit}>
                Confirm
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map( (item) => (
            <div className="Information-item" key={item.title}>
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;