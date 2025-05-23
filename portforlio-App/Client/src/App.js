import React from "react";

import Header from './Component/header';
import Home from './Component/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
  
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
    </Routes>
  </Router>
  </div>
  );
}
export default App;



