import React from 'react';
import classes from './ALink.module.css';

export default function ALink(props){
  return (
    <a className={classes.a} {...props}>
      {props.children}
    </a>
  )
};