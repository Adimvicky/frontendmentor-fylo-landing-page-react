import React, { Fragment } from 'react';
import ALink from '../components/ALink/ALink';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';

export default function HowItWorks(){
  return (
    <Fragment>
      <div class="section-how__top"></div>
      <section class="section-how">
        <div className="section-how__text">
          <h1 class="h1">Stay productive, wherever you are</h1>
          <p className="p1 mt-sm">
            Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file storage needs.
          </p>
          <p className="p1 mb-sm" style={{marginTop : '2rem'}}>
            Securely share files and folders with friends, family and colleagues for
            live collaboration. No email attachments required!
          </p>
          <ALink href="#">
            See how Fylo works
          </ALink>
          <TestimonialCard />
        </div>
        <div className="section-how__figure">
          <img src="./images/illustration-2.svg" alt=""/>
        </div>
      </section>
    </Fragment>

  )
};