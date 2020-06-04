import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
            {/* <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/> */}
          </Switch>
          {/* <Footer className="footer" /> */}
        </Router>
      </div>
    )
  }
}
