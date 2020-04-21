import React, { Component } from 'react'
import Router, { Route } from 'react-router-dom';
import './App.css';
import './Home.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resume" />
          <Route exact path="/projects" />
          <Route exact path="/about" />
        </Router>
      </div>
    )
  }
}
