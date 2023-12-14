const express = require("express");
const { Blog } = require("../Models/Blog.model.js");

const router = express.Router();

router.get("/:id", async (req, resp) => {
    try {
        let result = await Blog.findOne({ _id: req.params.id });
        if (result) {
            resp.send(result);
        } else {
            resp.send({ result: "no record found" });
        }
    } catch (error) {
        resp.status(400).json({ message: "no blog is found" });
    }
});

module.exports = router;
