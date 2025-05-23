const express = require("express");
const app =  express();
const port = process.env.PORT || 8080 ; 
const fs = require('fs');
const path = require('path');


app.use(express.static(path.join(__dirname, "../Client/build")));
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

app.get("/*" , (req, res) =>{

    res.sendFile(
        path.join(__dirname, "../Client/build/index.html"),
        (err)=>{
            if(err){
                res.status(500).send(err)
            }
        }
    );

});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})