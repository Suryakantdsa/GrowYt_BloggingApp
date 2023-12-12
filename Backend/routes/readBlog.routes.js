import { Router } from "express";
import { Blog } from "../Models/Blog.model.js"; 

const router=Router()

router.get("/", async (req, resp) => {
    try {
        let blogs = await Blog.find();
        if (blogs.length === 0) {
            resp.send({ result: "no blogs found" });
        } else {
            resp.send(blogs);
        }
    } catch {
        resp.status(400).json({ message: "error occurred while fetching blogs" });
    }
});

export default router