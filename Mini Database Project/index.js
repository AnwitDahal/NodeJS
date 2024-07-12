const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user");
const postModel = require("./models/post");
const app = express();
const port = 3000;

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { username, name, age, email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (user) {
    res.status(500).send("Email has already been used");
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        let user1 = await userModel.create({
          username,
          name,
          age,
          email,
          password: hash,
        });
        let token = jwt.sign({ email, userid: user1._id }, "helloworld");
        res.cookie("token", token);
        res.send(user1);
      });
    });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) res.status(500).send("Please input correct email or password");
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email, userid: user._id }, "helloworld");
      res.cookie("token", token);
      res.status(200).send("Welcome!!");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.send("You must be logged in");
  else {
    let data = jwt.verify(req.cookies.token, "helloworld");
    req.user = data;
    next();
  }
}

app.listen(port, () => {
  console.log("Server is running at the port " + port);
});
