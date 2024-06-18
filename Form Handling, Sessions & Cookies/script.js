const express = require('express')
const app=express();

//for the data to be in readable format in backend
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
//routes
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/profile",(req,res,next)=>{
    return next(new Error('something is wrong')) //print in console
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke') //in frontend
})

 app.listen(3000)