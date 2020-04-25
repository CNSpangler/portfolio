import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <div class="main">
        <section class="nameplate gleam">
          <span class="name">Chelsea Spangler</span>
          {/* <span class="name-shadow">Chelsea Spangler</span> */}
        </section>
        <span class="title rivet"></span>
      </div>
    )
  }
}
