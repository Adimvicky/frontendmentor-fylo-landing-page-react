import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Hero = () => (
  <section class="section-hero">
    <div className="section-hero__text">
      <h1 className="h1">
        <span> All your files in one secure </span>
        <span>location, accessible anywhere.</span>
      </h1>
      <p class="p1 my-sm">
        Fylo stores your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends,
        family, and co-workers.
      </p>
      <div class="d-flex w-90 section-hero__cta">
        <Input type="text" placeholder="Enter your email..." style={{flex : '60%', marginRight : '1.5rem'}}/>
        <Button style={{flex : '38%'}}>Get started</Button>
      </div>
    </div>
    <figure className="section-hero__figure">
      <img src="./images/illustration-1.svg" alt=""/>
    </figure>
  </section>
)

export default Hero;