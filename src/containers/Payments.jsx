import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { Helmet } from 'react-helmet';

import handleSumTotal from '../utils';
import AppContext from '../context/AppContext';

import '../style/components/Payment.css'

const Payments = () => {
  const {state: {cart, buyer}, addNewOrder } = useContext(AppContext);
  const history = useHistory();

  const paypalOptions = {
    clientId: 'AbIVwXqZXyvBI1Y-m4aKGRatG0hmc_f6VvlDwwNAsCUnJUP0eiYfZfsYZ_rltKBa11UaRvAzzpuF7wcv',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyle = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  }

  return(
    <>
      <Helmet>
        <title>Goide Store - Payments</title>
        <meta property="og:title" content="Goide Store - Payments" />
        <meta property="og:description" content="Goide Store - Payments" />
        <meta property="og:url" content="goidestore.xyz"  />
        <meta property="og:site_name" content="Goide Store - Payments"  />
        <meta property="og:locale" content="es_ES"  />
        <meta property="og:type" content="article"  />
      </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido: </h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>
                  $
                  {' '}
                  {item.price}
                </span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton 
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyle}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log('Start Payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.error(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;