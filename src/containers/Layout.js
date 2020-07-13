import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

function Layout() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HowItWorks />
      <CTA />
      <Footer />
    </Fragment>
  );
}

export default Layout;
