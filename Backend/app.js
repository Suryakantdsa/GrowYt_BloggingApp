const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const createBlog = require("./routes/createBlog.routes.js");
const readBlog = require("./routes/readBlog.routes.js");
const readOne = require("./routes/readOne.route.js");
const updateBlog = require("./routes/updateBlog.routes.js");
const deleteBlog = require("./routes/deleteBlog.routes.js");

app.use("/create", createBlog);
app.use("/", readBlog);
app.use("/blog", readOne);
app.use("/blog/edit", readOne);
app.use("/blog/edit", updateBlog);
app.use("/blog", deleteBlog);

module.exports = { app };
