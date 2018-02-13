const mongoose = require("mongoose");
const user = mongoose.model("user");
const room = mongoose.modelNames("room");

module.exports = (req, res) => {
    res.send("hi" + req.user);
}