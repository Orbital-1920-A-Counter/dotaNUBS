import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import bg from './assets/bg.jpg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import getPlayer from "./pages/components/get-player";
//import Users from "./components/users.component";

//import Icon from 'react-native-ionicons'
//import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';

//const IconBar = () => ( <Icon name="add" /> )

class App extends Component {
  render(){
  	return (
    <Home/>


  );
  }
}

export default App;
