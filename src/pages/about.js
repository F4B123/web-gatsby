import * as React from 'react'

import Header from '../components/myheader' 
import "../components/style.css"
import "../components/index.css"

const AboutPage = () => {
  return (  
    <>
      <Header>
      </Header>
      <body class= "container">
        <section class="home-main-section">
          <div class="call-to-action"> 
            <h1 class="title">Fabian Ruiz</h1>
            <span class="subtittle">Computer Science student at 
            National Univeristy of Colombia</span>
            <nav class="secondary-nav">
              <ul>
                <li><a href="skills.html" class="btn">Skills</a></li>
                <li><a href="skills.html" class="btn">Education</a></li>
                <li><a href="skills.html" class="btn">Experience</a></li>               
              </ul>
            </nav>
            
          </div>
          <div class="img-wrapper">
            <div class="my-image"></div>
          </div>
        </section>
      </body>
    </>
    
  )
}
export default AboutPage