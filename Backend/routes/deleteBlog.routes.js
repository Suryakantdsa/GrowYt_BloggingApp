const express = require("express");
const { Blog } = require("../Models/Blog.model.js");

const router = express.Router();

router.delete("/:id", async (req, resp) => {
    try {
        let result = await Blog.deleteOne({ _id: req.params.id });
        resp.send(result);
    } catch (error) {
        resp.status(400).json({ message: "Unable to delete the blog..! try later" });
    }
});

module.exports = router;
