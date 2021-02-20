import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

import '../style/components/Success.css';

const Success = () => {
  const { state: {buyer} } = useContext(AppContext);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 días a tu direccion: </span>
      </div>
    </div>
  );
};

export default Success;