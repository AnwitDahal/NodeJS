const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Anwit",
    email: "anwitdahal@gmail.com",
    age: 19,
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "hello world mongodb",
    user: "668ffd128e75aa150368db87",
  });

  let user = await userModel.findOne({ _id: "668ffd128e75aa150368db87" });
  user.posts.push(post._id);
  await user.save();
  res.send({
    post,
    user
  });
});

app.listen(port, () => {
  console.log(`Server is working on the port ${port}`);
});
