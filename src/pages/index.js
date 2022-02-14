import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Button,IconButton } from "@mui/material"
import openPDF from "../components/file"



//Quiero los links dentro de los botones
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my personal website, right now is under construction so please stay frosted.</p>
    
    <IconButton href="https://github.com/F4B123"  size="large"> <GitHubIcon/></IconButton>
    <IconButton href="https://linkedin.com/in/fruiztor"  size="large"> <LinkedInIcon/></IconButton>

    <Button variant="outlined"  onClick={() => { 
      openPDF();
      }}
      >My resume
    </Button>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Here is some information about myself.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> <br />
      <Link to="/about">Go to "About"</Link>      
    </p>
  </Layout>
)

export default IndexPage
