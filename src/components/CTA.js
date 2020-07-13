import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';

export default function CTA(){
  return (
    <section class="cta">
      <div class="cta__text">
        <h1 class="h1">Get early access today</h1>
        <p class="p1 mt-sm">
          It only takes a minute to sign up and our free starter tier is extremely generous.
          If you have any questions, our support team would be happy to help you.
        </p>
      </div>
      <form class="cta__form">
        <Input placeholder="email@example.com" style={{display : "block", maxWidth : "55rem",margin : "1rem 0",width : '100%', padding : "1.85rem"}}/>
        <Button style={{padding : "1.5rem 2.5rem"}}>
          Get started for free
        </Button>
      </form>
    </section>
  )
}