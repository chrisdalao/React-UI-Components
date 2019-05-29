import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {

  const displayCharacter = "0";

  const zeroButton = "0";

  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const mathButtons = ["÷", "x", "-", "+", "="];

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
            {nums.map(num => {
              return (
                <NumberButton key={num} buttonStyle={numClass} text={num} />
              );
            })}
            <ActionButton text={zeroButton} buttonStyle={actionClass} />
          </div>
          <div className="math-buttons">
            {mathButtons.map(mathBtn => {
              return(
                <NumberButton key={mathBtn} buttonStyle={mathBtnClass} text={mathBtn}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
