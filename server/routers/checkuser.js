const router = require("express").Router();

router.get("/checkuser", (req, res) => {
  res.send("have it");
});

module.exports = router;
