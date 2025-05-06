import React from 'react';
import { useState, useEffect } from 'react';
import './darkTheme.css';
import ReactMarkdown from 'react-markdown'


const Home = ()=>{



const [data, setData] = useState(null);
useEffect(()=>{
fetch("/home")
.then((res)=>res.text())
.then((data)=>setData(data));
},[]);

return (
  <div className="home">
    <div className="welcome">
      <h1 className="h1">WELCOME!</h1>
      <hr className="divider" />
      <div className="author-section">
        <img src="../assets/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="author-details">
          <strong>Hitesh Bhasin</strong>
          <div className="meta">
            <span>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
      <hr className="divider2" />
      <div className="about">
        {!data ? "error" : <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </div>
  </div>
);


}

export default Home;