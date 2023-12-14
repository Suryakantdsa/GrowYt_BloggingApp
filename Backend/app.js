import express from "express"
import cors from "cors"

const app =express()

app.use(express.json())
app.use(cors())

import createBlog from "./routes/createBlog.routes.js"
import readBlog from "./routes/readBlog.routes.js"
import readOne from "./routes/readOne.route.js"
import updateBlog from "./routes/updateBlog.routes.js"
import deleteBlog from "./routes/deleteBlog.routes.js"

app.use("/create", createBlog);
app.use("/", readBlog);
app.use("/blog", readOne);
app.use("/blog/edit", readOne);
app.use("/blog/edit", updateBlog);
app.use("/blog", deleteBlog);



export {app}