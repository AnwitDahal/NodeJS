const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie_parser = require("cookie-parser");
const port = 3000;

app.use(cookie_parser())

app.get("/", (req, res) => {
  //   res.cookie("Cookie", "Anwit");
  //   bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash("password", salt, function (err, hash) {
  //       // Store hash in your password DB.
  //       console.log(hash)
  //     });
  //   });
  // bcrypt.compare("password", "$2a$10$OMrjZw1r5GjtFrkl1B/DPOFxd34g1taJDAnDo4tPICbyiSI1AlYBK", function(err, result) {
  //     // result == true
  //     console.log(result)
  // });
  let token = jwt.sign({ email: "anwit@dahal.com" }, "secret");
  console.log(token);
  res.cookie("token", token);
  res.send("Hello World");
});

app.get('/read',(req,res)=>{
    console.log(req.cookies)
    let data=jwt.verify(req.cookies.token,'secret');
    console.log(data)
    res .send("Read route");
})

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
