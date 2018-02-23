const mongoose = require("mongoose");
const Room = mongoose.model("room");
module.exports = async function (req, res, next) {
    try {
        // 将自己创建的房间，公共的房间
        let roomlists = await Room.find({}, "name  slogen");
        res.send(roomlists);
    } catch (err) {
        console.log(err);
    }
};