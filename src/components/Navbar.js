import React from 'react'

function Navbar() {

     let navStyle = {
          fontSize: '14px',
          color: 'black',
          fontWeight: '600'
     }
     return (
          <div className='container'>
               <nav className="navbar navbar-expand-lg sticky-top" style={{ position: 'sticky', top: '0', zIndex: '100' }}>
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">
                              <img src="logo512.png" alt="Bootstrap" width="64" height="64"/>
                         </a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'end'}}>
                              <ul className="navbar-nav">
                                   <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/" style={navStyle}>Home</a>
                                   </li>
                                   <li className="nav-item" >
                                        <a className="nav-link" href="/table" style={navStyle}>Tables</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="/simple-calculator" style={navStyle}>Simple Calculator</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="/advanced-calculator" style={navStyle}>Advanced Calculator</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     )
}

export default Navbar
