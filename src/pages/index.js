import * as React from "react"
import { Link } from "gatsby"

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Button,IconButton } from "@mui/material"
import Header from '../components/myheader' 
import "../components/style.css"
import "../components/index.css"


//Quiero los links dentro de los botones


const IndexPage = () => (
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
              <li><IconButton href="https://github.com/F4B123"  size="large"  target="_blank" rel="noopener noreferrer"> <GitHubIcon/></IconButton></li>
              <li><IconButton href="https://linkedin.com/in/fruiztor"  size="large"  target="_blank" rel="noopener noreferrer"> <LinkedInIcon/></IconButton></li>
              <li><Button  href="https://drive.google.com/file/d/1QGuPdPFm8hLGXsj3ywjHWiG-Bh7OiYYp/view?usp=sharing" 
                          target="_blank" rel="noopener noreferrer">My resume</Button></li>               
            </ul>
          </nav>
          
        </div>
        <div class="img-wrapper">
          <div class="my-image"></div>
        </div>
      </section>
      <h1>Hi people</h1>

      <p>Welcome to my personal website, right now is under construction so please stay frosted.</p>     
      <p> Here is some information about myself.</p>

      <h2> <a id="skills">Skills</a></h2>

      <h3>Programming languages</h3>
      <p> Python <br />
          Java   <br />
          JavaScript
      </p>
      
      <h2><a id="EaC">Education and Certification</a></h2>
      <p> Computer Sciences at Universidad Nacional de Colombia <br />
          Google Cloud and Machine Learning fundamentals  <br />
      </p>

      <h2><a id="Interest">Interest</a></h2>
      <p> Cloud Computing <br />
          Machine Learning <br />
          Gaming <br />
          Reading <br />
          Astronomy <br />
          Phylosophy
      </p>


      <p>
        <Link to="/page-2/">Work Experience</Link> <br />
        <Link to="/about">Go to "About"</Link>      
      </p>
        </body>
    </>
  
)

export default IndexPage
