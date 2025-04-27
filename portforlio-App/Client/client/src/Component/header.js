import React from "react";
import './header.css';
const Header =() =>{
   return (
    <header className="header">
        
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href = "/about"> About Me</a></li>
                <li><a href="/projects">My projects</a></li>
                <li><a href = "/conactForm">Contact Me</a></li>
                
            </ul>
        </nav>
    </header>
   )


}
export default Header;

