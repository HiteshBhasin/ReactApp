import React from "react";

import {Link} from 'react-router-dom';
import './header.css';
const Header =() =>{
   return (
     <header className="header">
       <nav>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/about">About me</a></li>
         <li><a href="/projects">My Projects</a></li>
         <li><a href="/contactForm">Contact Me</a></li>
         </ul>
       </nav>
     </header>
   );


}
export default Header;

{/* <Link to="/" className="link">Home</Link>
           <Link to="/about" className="link">About Me</Link>
           <Link to="/projects"className="link">Projects</Link>
           <Link to="/contactForm"className="link">Contact</Link> */}