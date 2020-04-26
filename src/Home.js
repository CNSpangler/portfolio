import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div class="main">
          <section class="nameplate gleam">
            <span class="name">Chelsea Spangler</span>
          </section>
          <div class="title rivet"></div>
        </div>

        <div class="side-by-side">
          <div id="left" class="info">
            Hi, I'm Chelsea. I build useful apps that solve real-world problems.
          </div>
          <div id="right" class="info">
            Here is some more stuff
          </div>
        </div>        
      </>
    )
  }
}
