const express = require("express");
const router = express.Router();
const verify = require("../middlewares/verifyToken");

router.get("/", verify, (req, res) => {
  res.json({ posts: { title: "my first post", description: "random data" } });
});

module.exports = router;
