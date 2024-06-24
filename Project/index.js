const express=require ('express')
const path=require('path')
const fs=require('fs')
const app=express();


app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
     fs.readdir(`./Files`,(error,files)=>{
        if(error) console.error(error)  
       else res.render("index",{files:files})
     })
})
app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./Files/${req.params.filename}`,{encoding:'utf8'},(err,filedata)=>{
        if (err) console.error(err)
            else res.render("show",{filename:req.params.filename,filedata:filedata})
    })
})
app.get('/edit/:filename',(req,res)=>{
    res.render("edit",{filename:req.params.filename})
})
app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        if(err) console.error(err)
            else res.redirect('/')
    })
})
app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(error)=>{
        if(error) console.error(error)
            res.redirect('/')
    })
})

app.listen(3000);
