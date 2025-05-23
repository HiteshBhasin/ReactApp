const express = require("express");
const app =  express();
const port = process.env.PORT || 8080 ; 
const fs = require('fs');
const path = require('path');



app.get("/home" ,(req, res)=>{
    const file= path.join(__dirname, './content/about.txt')
    fs.readFile(file , 'utf8', (err,data) =>{
        if (err) {
            console.error('error parsing the file');
            
        } else {
            res.send(data)
        }
    })

});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})