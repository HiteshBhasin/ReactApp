import React from 'react';
import { useState, useEffect } from 'react';
import './darkTheme.css';
import ReactMarkdown from 'react-markdown'
import profile from '../assets/profile.jpg'

const Home = ()=>{
  const [theme, setTheme] = useState('light')
  const toggeleTheme =()=>{
    setTheme(theme==='light'?'dark':'light');
}


const [data, setData] = useState(null);
useEffect(()=>{
fetch("/home")
.then((res)=>res.text())
.then((data)=>setData(data));
},[]);

return (
  <div className={`home ${theme}`}>
    <div className="welcome">
      <h1 className="h1">WELCOME!</h1>
      <h2 className='h2'>
        Chane the Theme to.<br/>
        <button className='button' onClick={toggeleTheme}>
          Switch to {theme==='light'? 'Lite':'Dark Grey'}
        </button>
      </h2>
      <hr className="divider" />
      <div className="author-section">
        <img src={profile} alt="Profile" className="profile-pic" />
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