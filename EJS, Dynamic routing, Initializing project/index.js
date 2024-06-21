const express = require('express')
const app=express();

//parsers for the form
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Its working")
})

app.listen(3000,()=>{
    console.log('It is running')
})