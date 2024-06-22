// console.log(path.join(__dirname,'public'))
const express = require('express')
const app=express();
const path = require('path') 

//parsers for the form
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs') //backend rendres ejs

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/profile/:username',(req,res)=>{
    res.send(`Welcome ${req.params.username}`)
})
app.get('/author/:username/:age',(req,res)=>{
    // res.send(req.params)
    res.send(`Welcome ${req.params.username} . Your age is ${req.params.age}`)
})

app.listen(3000,()=>{
    console.log('It is running')
})