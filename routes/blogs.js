const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blogs");

router.get("/login", blogCtrl.index);

router.post("/", blogCtrl.create);

router.put("/:id", blogCtrl.updatePost);

router.delete("/:id", blogCtrl.deletePost);

module.exports = router;
