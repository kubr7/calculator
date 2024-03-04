import React, { useState } from "react";

function Calculator() {
     const [num1, setNum1] = useState("");
     const [num2, setNum2] = useState("");
     const [result, setResult] = useState("");
     const [answer, setAnswer] = useState("");
     const [error, setError] = useState("");
     const [clearButtonHovered, setClearButtonHovered] = useState(false);
     const [resultLabel, setResultLabel] = useState('');
     const [answerLabel, setAnswerLabel] = useState('');
     const [displayError, setDisplayError] = useState(false);

     const generateRandomNumber = () => {
          const randomNum1 = Math.floor(Math.random() * 1000) + 1;
          const randomNum2 = Math.floor(Math.random() * 1000) + 1;
          setNum1(randomNum1.toString());
          setNum2(randomNum2.toString());
          setResultLabel('');
          setAnswerLabel('');
          setResult('');
          setAnswer('');
          setDisplayError(false);
     };

     const performOperation = (operation) => {
          const numValue1 = parseFloat(num1, 10);
          const numValue2 = parseFloat(num2, 10);

          if (!isNaN(numValue1) && !isNaN(numValue2)) {
               switch (operation) {
                    case "add":
                         setResult(`${numValue1} + ${numValue2} = ${(numValue1 + numValue2).toFixed(2)}`);
                         setAnswer(`${(numValue1 + numValue2).toFixed(2)}`);
                         setError("");
                         setResultLabel('Result :');
                         setAnswerLabel('Answer :');
                         setDisplayError(false);
                         break;
                    case "subtract":
                         setResult(`${numValue1} - ${numValue2} = ${(numValue1 - numValue2).toFixed(2)}`);
                         setAnswer(`${(numValue1 - numValue2).toFixed(2)}`);
                         setError("");
                         setResultLabel('Result :');
                         setAnswerLabel('Answer :');
                         setDisplayError(false);
                         break;
                    case "multiply":
                         setResult(`${numValue1} x ${numValue2} = ${(numValue1 * numValue2).toFixed(2)}`);
                         setAnswer(`${(numValue1 * numValue2).toFixed(2)}`);
                         setError("");
                         setResultLabel('Result :');
                         setAnswerLabel('Answer :');
                         setDisplayError(false);
                         break;
                    case "divide":
                         if (numValue2 !== 0) {
                              setResult(`${numValue1} ÷ ${numValue2} = ${(numValue1 / numValue2).toFixed(2)}`);
                              setAnswer(`${(numValue1 / numValue2).toFixed(2)}`);
                              setError("");
                              setResultLabel('Result :');
                              setAnswerLabel('Answer :');
                              setDisplayError(false);
                         } else {
                              setResult("");
                              setAnswer("");
                              setError("Cannot divide by zero");
                         }
                         break;
                    default:
                         setResult("");
                         setAnswer("");
                         setError("Invalid operation");
                         setDisplayError(false);
               }
          } else {
               setResult("");
               setAnswer("");
               setError("Please enter valid numbers");
               setDisplayError(true);
          }
     };

     const handleClear = () => {
          setNum1("");
          setNum2("");
          setResult("");
          setAnswer("");
          setError("");
          setResultLabel('');
          setAnswerLabel('');
     };

     const handleHover = () => {
          setClearButtonHovered(true);
     };

     const handleLeave = () => {
          setClearButtonHovered(false);
     };

     return (
          <div className="container calc m-auto p-4">
               <div className="headLine">
                    <h4 className="text-center lineUp">Enter Numbers..</h4>
               </div>
               <div className="oprand d-flex justify-content-center flex-wrap">
                    <div className="input-group input-group-sm">
                         <span className="input-group-text" id="inputGroup-sizing-sm" style={{ width: '140px', fontSize: '12px', fontWeight: '500', borderRadius: '0', backgroundColor: 'transparent' }}>Enter First Number:</span>
                         <input type="number" className="form-control" value={num1} onChange={(e) => setNum1(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{ fontSize: '14px', fontWeight: '500', borderRadius: '0' }} />
                    </div>
                    <div className="" style={{ display: 'contents' }}>
                         <button type="button" className={`btn btn-outline-primary rounded-0 m-1 ${clearButtonHovered ? 'clear-hovered' : ''}`} onClick={generateRandomNumber} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{ fontSize: '12px' }}>
                              <strong>Generate Random Numbers</strong>
                         </button>
                    </div>
                    <div className="input-group input-group-sm">
                         <span className="input-group-text" id="inputGroup-sizing-sm" style={{ width: '140px', fontSize: '12px', fontWeight: '500', borderRadius: '0' }}>Enter Second Number:</span>
                         <input type="number" className="form-control" value={num2} onChange={(e) => setNum2(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{ fontSize: '14px', fontWeight: '500', borderRadius: '0' }} />
                    </div>
               </div>
               <div className="operations m-auto">
                    <div className="btn-group mt-3 w-100 d-flex flex-wrap" role="group" aria-label="Basic outlined example">
                         <button type="button" className="btn btn-outline-primary rounded-0 m-1" onClick={() => performOperation("add")}><strong>+</strong></button>
                         <button type="button" className="btn btn-outline-primary rounded-0 m-1" onClick={() => performOperation("subtract")}><strong>-</strong></button>
                         <button type="button" className={`btn btn-outline-primary rounded-0 m-1 ${clearButtonHovered ? 'clear-hovered' : ''}`} onClick={handleClear} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{ fontSize: '12px' }} >
                              <strong>Clear</strong>
                         </button>
                         <button type="button" className="btn btn-outline-primary rounded-0 m-1" onClick={() => performOperation("multiply")}><strong>×</strong></button>
                         <button type="button" className="btn btn-outline-primary rounded-0 m-1" onClick={() => performOperation("divide")}><strong>÷</strong></button>
                    </div>
               </div>
               <div className="resultDisplay m-auto mt-3 shadow">
                    <div className="d-flex animated-text resultBox m-auto p-4">
                         {displayError ? (
                              <span className="error text-danger lineUp">{error}</span>
                         ) : (<>
                              <div className="headLine border-0"><div className="resultStyle">{resultLabel} {result}</div></div>
                              <div><strong className="answer-box">{answerLabel} {" "}
                                   {answer.split("").map((char, index) => (
                                        <div className="waviy">
                                             <span style={{ '--i': index }} key={index}>{char}</span>
                                        </div>
                                   ))}</strong>
                              </div>
                         </>
                         )}
                    </div>
               </div>
          </div>
     );
}

export default Calculator;
