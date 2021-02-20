import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payments from '../containers/Payments';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

// importando nuestoro custom-hook y nuestro useContext para conextarlo a nuestra app
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout> 
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/checkout" component={Checkout} /> 
            <Route exact path="/checkout/information" component={Information} /> 
            <Route exact path="/checkout/payments" component={Payments} />   
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} /> 
          </Switch>   
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;