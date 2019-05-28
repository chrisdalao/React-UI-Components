import React from 'react';
import './Button.css';


const ActionButton = actionProps => {
    return <button className={actionProps.buttonStyle}>{actionProps.text}</button>
  };
  
  export default ActionButton;