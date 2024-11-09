// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const express  = require('express');
const port  = process.env.PORT || 3001; 

const app = express(); 
app.listen(port, ()=>{
    console.log("server is running on port 3001")
}); 


    
