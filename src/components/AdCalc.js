import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';

function AdCalc() {
     const [expression, setExpression] = useState('');
     const [result, setResult] = useState('');
     const [showAns, setShowAns] = useState(false);
     const [exponent, setExponent] = useState('');

     const handleButtonClick = (value) => {
          setExpression((prevExpression) => prevExpression + value);
          setShowAns(false);
          setExponent('');
     };

     const handleCalculate = () => {
          try {
               const calculatedResult = math.evaluate(expression);
               const formattedResult = calculatedResult.toFixed(2);
               setResult(formattedResult);
               setShowAns(true);
               setExponent('');

               // setResult(calculatedResult);
          } catch (error) {
               setResult('Error');
               setShowAns(false);
          }
     };

     const handleAllClear = () => {
          setExpression('');
          setResult('');
          setShowAns(false);
          setExponent('');
     };

     const handleClear = () => {
          setExpression((prevExpression) => prevExpression.slice(0, -1));
          setShowAns(false);
     }

     const handleSquareRootClick = () => {
          if (expression !== '') {
               setExpression(`√${expression}`);
               setResult(Math.sqrt(parseFloat(expression)).toFixed(2));
               setShowAns(true);
               setExponent('');
          } else if (result !== '' && !isNaN(parseFloat(result))) {
               setResult(Math.sqrt(parseFloat(result)).toFixed(2));
               setShowAns(true);
          }
     };

     const handleCubicRootClick = () => {
          if (expression !== '') {
               setExpression(`∛${expression}`);
               setResult(Math.cbrt(parseFloat(expression)).toFixed(2));
               setShowAns(true);
               setExponent('');
          } else if (result !== '' && !isNaN(parseFloat(result))) {
               setResult(Math.cbrt(parseFloat(result)).toFixed(2));
          }
     };

     const handleSquareClick = () => {
          if (expression !== '') {
               setExpression(`(${expression})`);
               setResult(expression * expression);
               setShowAns(true);
               setExponent(2);
          }
     }

     const handleCubeClick = () => {
          if (expression !== '') {
               setExpression(`(${expression})`);
               setResult(Math.pow(parseFloat(expression), 3).toFixed(2));
               setShowAns(true);
               setExponent(3);
          }
     }

     // eslint-disable-next-line react-hooks/exhaustive-deps
     const handleKeyPress = (event) => {
          const key = event.key;

          // Handle numeric keys, operators, and Enter key
          if (/[0-9+\-*/.]/.test(key)) {
               handleButtonClick(key);
          } else if (key === 'Enter') {
               handleCalculate();
          } else if (key === 'Escape') {
               handleClear();
          } else if (key === 'Backspace') {
               setShowAns(false);
               setExpression((prevExpression) => prevExpression.slice(0, -1));
          }
     };

     useEffect(() => {
          // Attach the keydown event listener when the component mounts
          window.addEventListener('keydown', handleKeyPress);

          // Remove the event listener when the component unmounts
          return () => {
               window.removeEventListener('keydown', handleKeyPress);
          };
     }, [expression, handleKeyPress]); // Adding expression to the dependency array to avoid potential issues
     return (
          <div className="container">
               <div className="calculator">
                    <div className="display">
                         <div className="result d-flex justify-content-between mb-1">
                              <div className="input-group-text border-0 p-0" id="inputGroup-sizing-sm" style={{ fontSize: '12px', fontWeight: '500', borderRadius: '0' }}>{showAns ? `Ans :` : ''}</div>
                              <div>{showAns ? result : ''}</div>
                         </div>
                         <div className="expression">{expression}<sup>{exponent}</sup></div>
                    </div>
                    <div className="buttons">
                         <div className="row justify-content-center">
                              <button className='btn' onClick={() => handleButtonClick('7')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>7</button>
                              <button className='btn' onClick={() => handleButtonClick('8')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>8</button>
                              <button className='btn' onClick={() => handleButtonClick('9')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>9</button>
                              <button className='btn' onClick={() => handleButtonClick('/')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>÷</button>
                              {/* <button className='btn' onClick={() => handleButtonClick('÷')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>÷</button> */}
                         </div>
                         <div className="row justify-content-center">
                              <button className='btn' onClick={() => handleButtonClick('4')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>4</button>
                              <button className='btn' onClick={() => handleButtonClick('5')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>5</button>
                              <button className='btn' onClick={() => handleButtonClick('6')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>6</button>
                              <button className='btn' onClick={() => handleButtonClick('*')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>×</button>
                              {/* <button className='btn' onClick={() => handleButtonClick('×')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>×</button> */}
                         </div>
                         <div className="row justify-content-center">
                              <button className='btn' onClick={() => handleButtonClick('1')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>1</button>
                              <button className='btn' onClick={() => handleButtonClick('2')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>2</button>
                              <button className='btn' onClick={() => handleButtonClick('3')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>3</button>
                              <button className='btn' onClick={() => handleButtonClick('-')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>-</button>
                         </div>
                         <div className="row justify-content-center">
                              <button className='btn' onClick={() => handleButtonClick('.')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>.</button>
                              <button className='btn' onClick={() => handleButtonClick('0')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFC947' }}>0</button>
                              <button className='btn' onClick={handleCalculate} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>=</button>
                              <button className='btn' onClick={() => handleButtonClick('+')} style={{ width: '5rem', margin: '1px', backgroundColor: '#FFA900' }}>+</button>
                         </div>
                         <div className="row justify-content-center">
                              <button className='btn' onClick={handleCubicRootClick} style={{ width: '5rem', margin: '1px', backgroundColor: '#B4D4FF' }}>∛</button>
                              <button className='btn' onClick={handleSquareRootClick} style={{ width: '5rem', margin: '1px', backgroundColor: '#B4D4FF' }}>√</button>
                              <button className='btn' onClick={handleSquareClick} style={{ width: '5rem', margin: '1px', backgroundColor: '#B4D4FF' }}>x<sup>2</sup></button>
                              <button className='btn' onClick={handleCubeClick} style={{ width: '5rem', margin: '1px', backgroundColor: '#B4D4FF' }}>x<sup>3</sup></button>
                         </div>
                         <div className="row justify-content-center">
                              <button className='btn' onClick={handleAllClear} style={{ width: '5rem', margin: '1px', backgroundColor: '#D71313' }}>AC</button>
                              <button className='btn' onClick={handleClear} style={{ width: '5rem', margin: '1px', backgroundColor: '#86B6F6' }}>C</button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default AdCalc


