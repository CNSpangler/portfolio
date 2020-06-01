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
            <p>Hi, I'm Chelsea. I build useful apps that solve real-world problems.</p>
            <p>Scroll down to see some of my favorite projects.</p>
          </div>
          <ul id="right" class="info">
            <li>
              <a href="https://www.canva.com/design/DAD5iEB56sc/5d2MYtNBsnSOXzPhpKT6Qg/view?utm_content=DAD5iEB56sc&utm_campaign=designshare&utm_mediumank&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="resume.png" alt="Resume icon" />
                <span class="contact">Resume</span>
              </a>
            </li>
            <li>
              <a href="mailto:chelseanspangler@gmail.com" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="email.png" alt="email icon" />
                <span class="contact">Email</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/cnspangler" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="github.png" alt="GitHub icon" />
                <span class="contact">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="linkedin.png" alt="LinkedIn icon" />
                <span class="contact">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>        
      </>
    )
  }
}
