import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Home from './Home.js';

export default class App extends Component {
  render() {
    return (
      <div class="app-main">
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
            {/* <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
