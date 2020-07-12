import React from 'react';
import classes from './TestimonialCard.module.css';

export default function TestimonialCard(props){
  return (
    <div className={classes.card}>
      <p className={`${classes.card__text}`}>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration machine.
      </p>
      <div className={`mt-sm ${classes.card__person}`}>
        <div className={classes.card__person__img}>
          <img src="/images/avatar-testimonial.jpg" alt=""/>
        </div>
        <div className={classes.card__person__name}>
          <p className={classes.card__person__name__name}>
            Kyle Burton
          </p>
          <p className={classes.card__person__name__title}>
            Founder & CEO, Huddle
          </p>
        </div>
      </div>

    </div>
  )
};