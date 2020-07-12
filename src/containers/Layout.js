import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

function Layout() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </Fragment>
  );
}

export default Layout;
