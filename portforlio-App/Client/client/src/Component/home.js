import React from 'react';
import { useState, useEffect } from 'react';
import './darkTheme.css';
const Home = ()=>{
const [theme, setTheme] = useState('light');

const toggeleTheme =()=>{
    setTheme(theme==='light'?'dark':'light');
}
// const [data, setData] = useState(null);
// useEffect(()=>{
// fetch("/home")
// .then((res)=>res.json())
// .then((data)=>setData(data.message));
// },[]);

return(<div className={`home ${theme}`}>
    <div className='welcome'>
    <h1 className='h1'>
        WELCOME!
    </h1> <br />
    <h2 className='h2'>
        Select you theme.<br/>
        <button className='button' onClick={toggeleTheme}>
    Switch to {theme==='light'? 'Light':'Dark'}
        </button>
    </h2>
    </div>
    <div className='about'>

    </div>
    
</div>)


}

export default Home;