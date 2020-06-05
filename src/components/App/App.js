import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';

export default class App extends Component {
  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
