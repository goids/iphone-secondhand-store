import React from 'react'
import Footer from './Footer';
import Header from './Header';

import '../style/components/Layout.css';

const Layout = (props) => {
  const { children } = props;
  return(
    <div className="Main">
      <Header />
      { children }
      <Footer />
    </div>
  );
}

export default Layout;