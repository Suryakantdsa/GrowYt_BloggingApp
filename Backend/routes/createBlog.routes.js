import { Router } from "express";
import { Blog } from "../Models/Blog.model.js";


const router=Router()

router.post("/", async (req, resp) => {
    try {
        let newBlog = new Blog(req.body)
        let result = await newBlog.save();
        resp.send(result)
        
    }
    catch {
        resp.status(400).json({ message: "something went wrong pleae cheek the inputdata once" })
    }
})

export default router