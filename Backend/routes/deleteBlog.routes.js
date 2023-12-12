import { Router } from "express";
import { Blog } from "../Models/Blog.model.js"; 


const router=Router()

router.delete("/:id", async (req, resp) => {
    try {
        let result = await Blog.deleteOne({ _id: req.params.id })
        resp.send(result)
    }
    catch {
        resp.status(400).json({ message: "Unable to delete the blog..! try later  " })
    }
})


export default router