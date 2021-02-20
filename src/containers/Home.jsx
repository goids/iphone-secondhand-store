import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';

import initialState from '../initialState';

const Home = () => (
  <>
    <Helmet>
      <title>Goide Store</title>
      <meta property="og:title" content="Goide Store" />
      <meta property="og:description" content="Goide Store" />
      <meta property="og:url" content="goidestore.xyz"  />
      <meta property="og:site_name" content="Goide Store"  />
      <meta property="og:locale" content="es_ES"  />
      <meta property="og:type" content="article"  />
    </Helmet>
    <Products products={initialState.products} />
  </>
);

export default Home;