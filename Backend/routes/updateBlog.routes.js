import { Router } from "express";
import { Blog } from "../Models/Blog.model.js";

const router = Router()

router.put("/:id", async (req, resp) => {
    try {

        let result = await Blog.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        )
        resp.send(result)
    }
    catch {
        resp.status(400).json({ message: "error in upadating" })
    }
})


export default router