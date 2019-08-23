import React from 'react';
import './Display.css';


const CalculatorDisplay = displayProps => {
    return <button className={displayProps.displayStyle}>{displayProps.text}</button>
  };
  
  export default CalculatorDisplay;