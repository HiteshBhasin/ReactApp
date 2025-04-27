import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import Header from './Component/header';

function App() {
const [data, setData] = useState(null);
useEffect(()=>{
fetch("/api")
.then((res)=>res.json())
.then((data)=>setData(data.message));
},[]);


  return (
    <div className="App">
  <Header/>
  <main>
  
  </main>
  
  </div>
  );
}
export default App;


