import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import AppContext from '../context/AppContext';

import '../style/components/Success.css';

const Success = () => {
  const { state: {buyer} } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>Goide Store - Success</title>
        <meta property="og:title" content="Goide Store - Success" />
        <meta property="og:description" content="Goide Store - Success" />
        <meta property="og:url" content="goidestore.xyz"  />
        <meta property="og:site_name" content="Goide Store - Success"  />
        <meta property="og:locale" content="es_ES"  />
        <meta property="og:type" content="article"  />
      </Helmet>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 días a tu direccion: </span>
        </div>
      </div>
    </>
  );
};

export default Success;