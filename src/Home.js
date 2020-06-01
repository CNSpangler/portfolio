import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="main">
          <section className="nameplate gleam">
            <span className="name">Chelsea Spangler</span>
          </section>
          <div className="title rivet"></div>
        </div>

        <div className="side-by-side">
          <div id="left" className="info">
            <p>Hi, I'm Chelsea. I build useful apps that solve real-world problems. I am currently looking for work in the Portland, OR area (or remotely).</p>
            <p>Scroll down to see some of my favorite projects.</p>
          </div>
          <ul id="right" className="info">
            <li>
              <a href="https://www.canva.com/design/DAD5iEB56sc/5d2MYtNBsnSOXzPhpKT6Qg/view?utm_content=DAD5iEB56sc&utm_campaign=designshare&utm_mediumank&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="curriculum.png" alt="Resume icon" />
                <span className="contact">Resume</span>
              </a>
            </li>
            <li>
              <a href="mailto:chelseanspangler@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="email.png" alt="email icon" />
                <span className="contact">Email</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/cnspangler" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="github.png" alt="GitHub icon" />
                <span className="contact">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="linkedin.png" alt="LinkedIn icon" />
                <span className="contact">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>        
      </>
    )
  }
}
