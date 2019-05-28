import React from 'react';
import './Button.css';


const NumberButton = numberProps => {
    return <button className={numberProps.buttonStyle}>{numberProps.text}</button>
  };
  
  export default NumberButton;
  