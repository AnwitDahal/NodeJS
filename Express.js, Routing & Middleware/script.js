const express = require('express')
const app=express();

app.use((req,res,next)=>{
    console.log('middleware')
    next()
});
//routes
app.get("/",(req,res)=>{
    res.send("Hello world at /")
})
app.get("/profile",(req,res,next)=>{
    return next(new Error('something is wrong')) //print in console
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke') //in frontend
})

 app.listen(3000)