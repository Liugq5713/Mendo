const router = require("express").Router();

router.get("/checkuser", (req, res) => {
  res.send("get it");
});

module.exports = router;
