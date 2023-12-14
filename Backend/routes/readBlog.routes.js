const express = require("express");
const { Blog } = require("../Models/Blog.model.js");

const router = express.Router();

router.get("/", async (req, resp) => {
    try {
        let blogs = await Blog.find();
        if (blogs.length === 0) {
            resp.send({ result: "no blogs found" });
        } else {
            resp.send(blogs);
        }
    } catch (error) {
        resp.status(400).json({ message: "error occurred while fetching blogs" });
    }
});

module.exports = router;
