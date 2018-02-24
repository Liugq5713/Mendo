const mongoose = require("mongoose");
// const User = mongoose.model("user");
const Room = mongoose.model("room");

module.exports = (req, res) => {
    console.log('req.user', req.user)
    console.log('req.user == undefined', req.user == undefined)
    if (req.user == undefined) {
        console.log("isRedirect")
        res.redirect("/login")
    } else {
        Room.create({
            isPublic: false,
            name: req.body.roomName,
            slogen: req.body.roomSlogen,
            creator: req.user._id
        }, function (err, room) {
            if (err) {
                throw new Error({
                    name: "CreateRoomException",
                    message: "新建房间保存数据库失败" + err
                })
            }
            res.send(room._id)
        })
    }

}