const express = require("express");
const { Blog } = require("../Models/Blog.model.js");

const router = express.Router();

router.put("/:id", async (req, resp) => {
    try {
        let result = await Blog.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        );
        resp.send(result);
    } catch (error) {
        resp.status(400).json({ message: "error in updating" });
    }
});

module.exports = router;
