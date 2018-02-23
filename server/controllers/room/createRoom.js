const mongoose = require("mongoose");
// const User = mongoose.model("user");
const Room = mongoose.model("room");

module.exports = (req, res) => {
    Room.create({
        isPublic: false,
        creator: req.user._id
    }, function (err, room) {
        if (err) {
            console.log("新建房间保存数据库失败" + err)
        }
        res.send(room._id)
    })
}