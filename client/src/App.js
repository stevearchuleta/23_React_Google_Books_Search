import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './books.png';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import NoMatch from "./pages/NoMatch/NoMatch";


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
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
    </Router>
      
      </div>
      );
    }
  }


export default App;
