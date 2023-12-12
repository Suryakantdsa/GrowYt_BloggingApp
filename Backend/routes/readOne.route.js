import { Router } from "express";
import { Blog } from "../Models/Blog.model.js";


const router=Router()

router.get("/:id", async (req, resp) => {
    try {

        let result = await Blog.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        }
        else {
            resp.send({ result: "no record found" })
        }
    }
    catch {
        resp.status(400).json({ message: "no blog is found" })
    }
})

export default router