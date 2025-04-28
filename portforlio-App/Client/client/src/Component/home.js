import React from 'react';
import { useState } from 'react';
import './darkTheme.css';
const Home = ()=>{
const [theme, setTheme] = useState('light');

const toggeleTheme =()=>{
    setTheme(theme==='light'?'dark':'light');
}

return(<div className={`home ${theme}`}>
    <h1>
        WELCOME!
    </h1> <br />
    <h2>
        Select you theme.
        <button onClick={toggeleTheme}>
    Switch to {theme==='light'? 'Dark':'Light'}
        </button>
    </h2>
</div>)


}

export default Home;