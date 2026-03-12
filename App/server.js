const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongodb:27017/test")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Node + Mongo + Docker + CI/CD Working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});