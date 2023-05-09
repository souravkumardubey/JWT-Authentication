require("dotenv").config();

const posts = require("./routes/posts");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/user", auth);
app.use("/api/posts", posts);
mongoose
  .connect("mongodb://localhost/jwt-auth")
  .then(() => console.log("Connected to db.."))
  .catch((err) => {
    console.error("Could not connect to MongoDB..");
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
