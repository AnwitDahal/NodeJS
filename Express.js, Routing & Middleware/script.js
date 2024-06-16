const express = require('express')
const app=express();

//routes
app.get("/",(req,res)=>{
    res.send("Hello wdd at /")
})

app.get("/profile",(req,res)=>{
    res.send("Profile route")
 })

 app.listen(3000)