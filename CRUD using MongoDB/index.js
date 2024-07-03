const express=require('express')
const app=express()
const userModel=require('./usermodel')

app.get('/',(req,res)=>{
    res.send("It is running")
})
app.get('/create',async (req,res)=>{
   let createdUser=await userModel.create({
        name:"Ankit",
        email:"dahalankit0707@gmail.com",
        username:"Ankit"
    })

    res.send(createdUser)
})

app.get('/read',async (req,res)=>{
   let users=await userModel.find()
    res.send(users)
})

app.get('/update',async (req,res)=>{
    let updatedUser= await userModel.findOneAndUpdate({username:"Anwit"},{email:"anwitdahal@gmail.com"},{new:true})
    res.send(updatedUser)
 })


 app.get('/delete',async (req,res)=>{
    let deletedUser=await userModel.findOneAndDelete({username:"Anwit"})
     res.send(deletedUser)
 })



app.listen(3000)