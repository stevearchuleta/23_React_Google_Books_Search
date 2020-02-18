import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './books.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <img src= {logo} className="App-logo" alt="logo" />
          <h2>Google Books Search</h2>
          <p>A React App By Steve Archuleta</p>
        </header>
       <Router>
         
       </Router>
      </div>
    );
  }
}

export default App;
