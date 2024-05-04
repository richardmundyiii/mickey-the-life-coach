const express = require("express");
const router = express.Router();
const blogCtrl = require("../../controllers/api/blogs");

router.get("/", blogCtrl.index);

router.post("/", blogCtrl.create);

router.put("/:id", blogCtrl.updatePost);

router.delete("/:id", blogCtrl.deletePost);

module.exports = router;
