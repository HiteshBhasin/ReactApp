const express = require("express");
const app =  express();
const port = process.env.PORT || 8080 ; 
const fs = require('fs');
const path = require('path');

const filePath= path.join(__dirname, './content/about.txt')

app.get("/" , (req,res)=>{
    res.send("this is a a normal respornce")
});

app.get("/home" ,(req, res)=>{
    res.json({message:"this is a react app connect"})

});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})