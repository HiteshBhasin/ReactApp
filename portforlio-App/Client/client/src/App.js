import React from "react";
import {useState, useEffect} from "react";
import './App.css';

function App() {
const [data, setData] = useState(null);
useEffect(()=>{
fetch("/api")
.then((res)=>res.json())
.then((data)=>setData(data.message));
},[]);


  return (
    <div className="App">
    <header className="App-header">
      <p>
    loading
  </p>
  </header>
  </div>
  );
}
export default App;


