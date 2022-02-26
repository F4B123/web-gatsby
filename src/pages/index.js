import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Button,IconButton } from "@mui/material"





//Quiero los links dentro de los botones


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>

    <p>Welcome to my personal website, right now is under construction so please stay frosted.</p>  

    <IconButton href="https://github.com/F4B123"  size="large"> <GitHubIcon/></IconButton>
    <IconButton href="https://linkedin.com/in/fruiztor"  size="large"> <LinkedInIcon/></IconButton>

    <Button variant="outlined" href="https://drive.google.com/file/d/1QGuPdPFm8hLGXsj3ywjHWiG-Bh7OiYYp/view?usp=sharing" 
      >My resume
    </Button>
    
    <p> Here is some information about myself.</p>

    <h2>Skills</h2>

    <h3>Programming languages</h3>
    <p> Python <br />
        Java   <br />
        JavaScript
    </p>
    
    <h2>Education and Certification</h2>
    <p> Computer Sciences at Universidad Nacional de Colombia <br />
        Google Cloud and Machine Learning fundamentals  <br />
    </p>

    <h2>Interest</h2>
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
  </Layout>
)

export default IndexPage
