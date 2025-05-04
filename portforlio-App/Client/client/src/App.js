import React from "react";
import './App.css';

import Header from './Component/header';
import Home from './Component/home';
import Projects from './Component/projects';
import ContactForm from './Component/contactForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
  
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/projects" element ={<Projects/>}/>
      <Route path="/contactForm" element ={<ContactForm/>}/>
    </Routes>
  </Router>
  </div>
  );
}
export default App;



