const router = require("express").Router();

router.get("/checkuser", (req, res) => {
  res.send(req.user);
});

module.exports = router;
