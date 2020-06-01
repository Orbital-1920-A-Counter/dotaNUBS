import React from 'react';
import logo from './logo.jpg';
import bg from './bg.jpg';
import './App.css';


function Header(){
  return(
    <div className="App">
      <h1 className="App-header">
        <h1 style={{ color: 'maroon' }}> 
        <img src={logo} className="App-logo" alt="logo"></img>
        DotaNUBS: Free DoTA2 Data Analyzer</h1>
       </h1>
    </div>
    );
}


export default Header;
