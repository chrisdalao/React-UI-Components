import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {

  const displayCharacter = "0";

  const zeroButton = "0";
  const num1 = "1";
  const num2 = "2";
  const num3 = "3";
  const num4 = "4";
  const num5 = "5";
  const num6 = "6";
  const num7 = "7";
  const num8 = "8";
  const num9 = "9";

  const mathButtonDivide = "÷";
  const mathButtonMultiply = "x";
  const mathButtonSubtract = "-";
  const mathButtonAdd = "+";
  const mathButtonEquals = "=";

  const clearButton = "clear";

  const numClass = "num-button";
  const actionClass = "action-button";
  const displayClass = "calc-display";
  const mathBtnClass = "math-button";

  return (
    <div className="app">
      <div className="calculator-container">
        <CalculatorDisplay text={displayCharacter} displayStyle={displayClass} />
        <div className="calculator-buttons">
          <div className="number-buttons">
            <ActionButton text={clearButton} buttonStyle={actionClass} />
            <NumberButton text={num1} buttonStyle={numClass} />
            <NumberButton text={num2} buttonStyle={numClass} />
            <NumberButton text={num3} buttonStyle={numClass} />
            <NumberButton text={num4} buttonStyle={numClass} />
            <NumberButton text={num5} buttonStyle={numClass} />
            <NumberButton text={num6} buttonStyle={numClass} />
            <NumberButton text={num7} buttonStyle={numClass} />
            <NumberButton text={num8} buttonStyle={numClass} />
            <NumberButton text={num9} buttonStyle={numClass} />
            <ActionButton text={zeroButton} buttonStyle={actionClass} />
          </div>
          <div className="math-buttons">
            <NumberButton text={mathButtonDivide} buttonStyle={mathBtnClass} />
            <NumberButton text={mathButtonMultiply} buttonStyle={mathBtnClass} />
            <NumberButton text={mathButtonSubtract} buttonStyle={mathBtnClass} />
            <NumberButton text={mathButtonAdd} buttonStyle={mathBtnClass} />
            <NumberButton text={mathButtonEquals} buttonStyle={mathBtnClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
