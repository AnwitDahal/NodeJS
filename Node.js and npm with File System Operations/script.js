// const fs = require('fs');

// fs.writeFile("hey.txt",'Hello World',(err)=>{
//     if(err) console.error(err)
//         else console.log("Done")
// })

// fs.appendFile("hey.txt",'This is the work of fs.appendFile',(err)=>{
//     if (err) console.error(err)
//         else console.log('Append done')
// })

// fs.rename('hey.txt','rename.txt',(err)=>{
//     if (err) console.error(err)
//         else console.log('Rename Done')
// })
// fs.copyFile('rename.txt','./Copy/copy.txt',(err)=>{
//     if (err) console.error(err.message)
//         else console.log('Copy done')
// })
// fs.unlink('./Copy/copy.txt',(err)=>{
//     if (err) console.error(err)
//         else console.log('Deleyte (Unlink)')
// })
// fs.rm('./Copy',{recursive:true},(err)=>{
//     if (err) console.error(err)
//         else console.log('Directory Removed')
// })
// fs.readFile('rename.txt',{encoding:'utf8'},(err,data)=>{
//     if (err) console.error(err)
//         else console.log(data)
// })

const http=require('http')
const server=http.createServer((req,res)=>{
    res.end('Hello world');
});

server.listen(3000)