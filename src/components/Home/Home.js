import React, { Component } from 'react'
import Projects from '../Projects/Projects'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="main">
          <section className="nameplate gleam">
            <span className="name">Chelsea Spangler</span>
          </section>
            <h1 className="title">Full Stack Software Engineer</h1>
        </div>

        <div className="toptube"></div>

        <div id="about" >
          <p className="info">Hi, I'm Chelsea (she/her). I build useful apps that solve real-world problems. I am currently looking for work in/near Portland OR, or remotely.<br /><br />I love to ride bikes, make people laugh, invent creative cocktails, and read sci-fi.</p>
        </div>

        {/* <div className="side-by-side">
          <div id="left" className="info">
            <img alt="Chelsea posing with her bike" src="bike.jpg" id="bike" />
          </div>

          <div id="right">
          <p>Hi, I'm Chelsea. I build useful apps that solve real-world problems. I am currently looking for work in the Portland, OR area (or remotely).</p>
          <p>Some of my favorite projects are highlighted below.</p>
          </div> */}
          {/* <ul id="right" className="info">
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
          </ul> */}
        {/* </div> */}
        <h1>Portfolio</h1>
        <Projects />
      </>
    )
  }
}
