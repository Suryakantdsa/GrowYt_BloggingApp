const express = require("express");
const { Blog } = require("../Models/Blog.model.js");

const router = express.Router();

router.post("/", async (req, resp) => {
    try {
        let newBlog = new Blog(req.body);
        let result = await newBlog.save();
        resp.send(result);
    } catch (error) {
        resp.status(400).json({ message: "something went wrong please check the input data once" });
    }
});

module.exports = router;
