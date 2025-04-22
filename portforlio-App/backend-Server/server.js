const express = require("express");
const app =  express();
const port = process.env.PORT || 8080 ; 


app.get("/" , (req,res)=>{
    res.send("this is a a normal respornce")
});

app.get("/api" ,(req, res)=>{
    res.json({message:"this is a react app connect"})

});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})