import React from 'react';
import logo from './assets/logo.jpg';
import bg from './assets/bg.jpg';
import easy from './assets/easy.png';
import free from './assets/free.png';
import effective from './assets/effective.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeroesList from "C:/Users/ASUS/Documents/orbital/dotaNUBS/dotaNUBS/frontend/src/pages/components/list-all-hero";

import './App.css';


function Body() {
  
  return (    <div className="App">
      <h1 className="App-header">
        <h1 style={{ color: 'maroon' }}> 
        <img src={logo} className="App-logo" alt="logo"></img>
        DotaNUBS: Free DoTA2 Data Analyzer</h1>
      </h1>
  
      <p className="background">
        <img src={bg} className="background" alt="background">
        </img>
      </p>
      
    <h1 style={{ fontSize:60, fontWeight: 'bold', color: 'black', position: 'absolute',  bottom: 0, left:250 }} >   Tired for being called a noob? </h1>
    <h1 style={{ fontSize:80, fontWeight: 'bold', color: 'black', position: 'absolute',  bottom: -100, left:380 }} >   Use DotaNUBS. </h1>
    <h1 className = "headers">Why every DoTA player should use dotaNUBS ? </h1>
<div className="icon">
  <h2 className="icon">
        <img src={free} className="App-logo" alt="logo"></img>
              </h2>
        <h2 style={{ color: 'black' }}> 

        Free: You need zero money to use our services.</h2>
      <h2 className="icon">
        <img src={easy} className="App-logo" alt="logo"></img>
        </h2>
        <h2 style={{ color: 'black' }}> 

        Easy: Never get lost with our intuitive design.</h2>
      
      <h2 className="icon">
        <img src={effective} className="App-logo" alt="logo"></img>
      </h2>

        <h2 style={{ color: 'black' }}> 

        Effective: Find what you want in less than a minute.</h2>
        </div>
<h1>              <Link to={"/list-all-hero"} className = "nav-link"> Heroes </Link>
            <Route exact path="/list-all-hero" component={HeroesList} /></h1>
    </div>

    );


}


export default Body;