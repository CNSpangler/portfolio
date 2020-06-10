import React, { Component } from 'react'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import Chevrons from '../Chevrons/Chevrons'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="toptube">
          <div className="links">
            <a href="https://www.canva.com/design/DAD5iEB56sc/5d2MYtNBsnSOXzPhpKT6Qg/view?utm_content=DAD5iEB56sc&utm_campaign=designshare&utm_mediumank&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" id="resume">
              <img alt="resume icon" src="resumeRed.png" className="icon"/>
            </a>
            <a href="mailto:chelseanspangler@gmail.com" target="_blank" rel="noopener noreferrer" id="email">
              <img className="icon" src="emailRed.png" alt="email icon" />
            </a>
            <a href="https://github.com/cnspangler" target="_blank" rel="noopener noreferrer" id="github">
              <img className="icon" src="githubRed.png" alt="GitHub icon" />
            </a>
            <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank" rel="noopener noreferrer" id="linkedin">
              <img className="icon" src="linkedinRed.png" alt="LinkedIn icon" />
            </a>
          </div>
        </div>

        <div className="main">
          <span className="name">Chelsea Spangler</span>
          <h1 className="title">Full Stack Software Engineer</h1>
        </div>

        <Chevrons />

        {/* <div id="about" >
          <p className="info">Hi, I'm Chelsea (she/her). I build useful apps that solve real-world problems. I am currently looking for work in/near Portland OR, or remotely.<br /><br />I love to ride bikes, make people laugh, invent creative cocktails, and read sci-fi.</p>
        </div> */}

        <h1 id="portfolio">Selected Projects:</h1>        
        <Projects />
        <Footer />
      </>
    )
  }
}
