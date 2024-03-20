import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const clear = () => {
    setInputValue('');
  };

  const calculateResult = () => {
    try {
      const result = math.evaluate(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  

  return (
    <div className="calculator">
    <input className="inputStyle" type="text" value={inputValue} readOnly />

    <div>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <br />
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <br />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <br />
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <br />
      <button onClick={() => handleButtonClick('*')}>×</button>
      <button onClick={() => handleButtonClick('/')}>÷</button>
      <button onClick={clear}>C</button>
      <br />
      <button onClick={calculateResult}>=</button>
    </div>
  </div>
);
}


export default Calculator;
