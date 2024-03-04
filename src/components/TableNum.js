import React, { useState, useEffect, useCallback } from 'react';

function TableNum() {
     const [num, setNum] = useState('');
     const [table, setTable] = useState([]);
     // const [displayTable, setDisplayTable] = useState([]);


     const generateTableData = useCallback((number) => {
          const numValue = parseFloat(number, 10);

          if (!isNaN(numValue)) {
               const tableData = [];
               for (let i = 1; i <= 10; i++) {
                    tableData.push(`${numValue} x ${i} = ${(numValue * i)}`);
               }
               return tableData;
          } else {
               // Handle invalid input
               return [];
          }
     }, []);

     const printTable = useCallback((number) => {
          const tableData = generateTableData(number);
          setTable(tableData);
          
     }, [generateTableData]);

     useEffect(() => {
          printTable(num);
     }, [num, printTable]);


     const handleGenerateTable = () => {
          printTable(num);
     };

     return (
          <div className="container p-5">
               <div className="numTableBox m-auto w-50">
                    <div className="input-group input-group-sm mb-3 m-auto">
                         <span className="input-group-text" id="inputGroup-sizing-sm" style={{ fontSize: '12px', fontWeight: '500', borderRadius: '0' }}>Enter number :</span>
                         <input type="number" className="form-control" value={num} onChange={(e) => setNum(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" min={1} />
                         <button type="button" className="btn btn-primary rounded-0" style={{ fontSize: '12px', fontWeight: '500' }} onClick={handleGenerateTable}>Generate Table</button>
                    </div>
                    {num !== '' ? (<>
                         <h5 className='text-center'>Your Table for number {num}</h5>
                         <table className="table table-bordered text-center">
                                   <thead>
                                        <tr style={{ fontSize: '10px', backgroundColor: 'transparent' }}>
                                             <th className='transparent-background'>Multiplier</th>
                                             <th className='transparent-background'>Operator</th>
                                             <th className='transparent-background'>Multiplicand</th>
                                             <th className='transparent-background'>Table</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {table.map((item, index) => {
                                             const [operation, result] = item.split('=').map((str) => str.trim());
                                             const [multiplier, multiplicand] = operation.split('x').map((str) => str.trim());

                                             return (
                                                  <tr key={index}>
                                                       <td className='transparent-background' style={{ fontWeight: '500', fontFamily: 'fantasy' }}>{multiplier}</td>
                                                       <td className='transparent-background' style={{ fontWeight: '500', fontFamily: 'fantasy' }}><strong>×</strong></td>
                                                       <td className='transparent-background' style={{ fontWeight: '500', fontFamily: 'fantasy' }}>{multiplicand}</td>
                                                       <td className='transparent-background' style={{ fontWeight: '500', fontFamily: 'fantasy' }}>{result}</td>
                                                  </tr>
                                             );
                                        })}
                                   </tbody>
                              </table>
                    </>) : ''}
               </div>
          </div>
     );
}

export default TableNum;
