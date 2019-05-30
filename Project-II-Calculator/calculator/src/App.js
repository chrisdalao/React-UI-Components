import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayCharacter: "0",

      zeroButton: "0",

      nums: [7, 8, 9, 4, 5, 6, 1, 2, 3],

      mathButtons: ["÷", "x", "-", "+", "="],

      clearButton: "clear",

      numClass: "num-button",
      actionClass: "action-button",
      displayClass: "calc-display",
      mathBtnClass: "math-button"

    }
  }


  render() {
    return (
      <div className="app" >
        <div className="calculator-container">
          <CalculatorDisplay
            text={this.state.displayCharacter}
            displayStyle={this.state.displayClass}
          />
          <div className="calculator-buttons">
            <div className="number-buttons">
              <ActionButton
                text={this.state.clearButton}
                buttonStyle={this.state.actionClass}
              />
              {this.state.nums.map(num => {
                return (
                  <NumberButton
                    key={num}
                    buttonStyle={this.state.numClass}
                    text={num}
                  />
                );
              })}
              <ActionButton
                text={this.state.zeroButton}
                buttonStyle={this.state.actionClass}
              />
            </div>
            <div className="math-buttons">
              {this.state.mathButtons.map(mathBtn => {
                return (
                  <NumberButton
                    key={mathBtn}
                    buttonStyle={this.state.mathBtnClass}
                    text={mathBtn}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
