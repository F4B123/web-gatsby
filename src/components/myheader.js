import * as React from "react"
import "../components/style.css"


const Header = () => (
    <header class= "main-header" >
        <a href = "/" class="web-name">
            <div class="web-name1">
                Fabian Ruiz
            </div>
        </a>
        <nav class="main-nav">
            <ul>
                <li><a href = "/">Skills</a></li>
                <li><a href = "/">Education</a></li>
                <li><a href = "/">Experience</a></li>
            </ul>
        </nav>
        
    </header>
)

export default Header