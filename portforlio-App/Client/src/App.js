import React from "react";

import Home from './Component/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
  
  <Router>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
    </Routes>
  </Router>
  </div>
  );
}
export default App;



