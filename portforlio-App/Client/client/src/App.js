import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import Header from './Component/header';
import About from './Component/about';
import Projects from './Component/projects';
import ContactForm from './Component/contactForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
// const [data, setData] = useState(null);
// useEffect(()=>{
// fetch("/api")
// .then((res)=>res.json())
// .then((data)=>setData(data.message));
// },[]);



  return (
    <div className="App">
 
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element ={<About/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/projects" element ={<Projects/>}/>
      <Route path="/contactForm" element ={<ContactForm/>}/>
    </Routes>
  </Router>
  </div>
  );
}
export default App;


