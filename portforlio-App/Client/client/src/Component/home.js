import React from 'react';
import { useState, useEffect } from 'react';
import './darkTheme.css';
import ReactMarkdown from 'react-markdown'


const Home = ()=>{
const [theme, setTheme] = useState('light');

const toggeleTheme =()=>{
    setTheme(theme==='light'?'dark':'light');
}
const [data, setData] = useState(null);
useEffect(()=>{
fetch("/home")
.then((res)=>res.text())
.then((data)=>setData(data));
},[]);

return(<div className='home'>
    <div className='welcome'>
    <h1 className='h1'>
        WELCOME!
    </h1> <br />
   
    <div className='about'>
    {!data ? 'error' : <ReactMarkdown>{data}</ReactMarkdown>}
    
    </div>
    </div>
   
    
</div>)


}

export default Home;