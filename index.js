// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const express  = require('express');
const port  = process.env.PORT || 3001; 
const path = require("path"); 


const app = express(); 
app.use(express.static(path.resolve(__dirname, '../client/build'))); 
app.get('/', (req,res)=>{
res.json({'Message': 'This is the messafe'})
});

app.get('/api/test', (req, res)=>{
res.json({'message': "this is a message for react app connect"})
});

app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../client/built", "index.html"));
})

app.listen(port, ()=>{
    console.log("server is running on port 3001")
}); 


    
