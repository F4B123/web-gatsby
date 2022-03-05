import * as React from "react"
import "../components/style.css"


const Header = () => (
    <header class= "main-header" >
        <a href = "/" class="web-name">
            <div class="web-name1">
                Home
            </div>
        </a>
        <nav class="main-nav">
            <ul>
                <li><a href = "/#skills">Skills</a></li>
                <li><a href = "/#EaC">Education</a></li>
                <li><a href = "/#Interest">Experience</a></li>
            </ul>
        </nav>
        
    </header>
)

export default Header