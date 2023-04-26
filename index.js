//Auth-user,id
//blog-title,description,foreign key-user_id
//comment-comment,foreign key-user_id,blog_id

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authRouter } = require("./src/auth/router");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//DB Connection
mongoose.connect("mongodb://localhost:27017/blog_g16");
mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});

app.use("/auth", authRouter);

app.listen(4000, () => {
  console.log("server started on 4000");
});
