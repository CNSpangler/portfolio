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
          <ul id="right" class="info">
            <li>
              <a href="https://www.canva.com/design/DAD5iEB56sc/5d2MYtNBsnSOXzPhpKT6Qg/view?utm_content=DAD5iEB56sc&utm_campaign=designshare&utm_mediumank&utm_source=sharebutton">
                <img class="icon" src="resume.png" alt="Resume icon" />
                <span>Resume</span>
              </a>
            </li>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
          </ul>
        </div>        
      </>
    )
  }
}
