const mongoose = require("mongoose");
// const User = mongoose.model("user");
const Room = mongoose.model("room");

module.exports = (req, res) => {
    Room.findById(req.body.roomId, function (err, room) {
        if (err) {
            console.log("寻找更新房间信息失败" + err)
        }
        room.name = req.body.roomName;
        room.slogen = req.body.roomSlogen;
        room.save((err) => {
            if (err) {
                console.log("更新房间信息失败" + err)
            }
        })
    })
    res.end();
}