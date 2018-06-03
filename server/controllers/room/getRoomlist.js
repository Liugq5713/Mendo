const mongoose = require("mongoose");
const Room = mongoose.model("room");
module.exports = async function (req, res, next) {
    try {
        // 将自己创建的房间，公共的房间
        let roomlists_public = await Room.find({
            isPublic: true
        }, "name  slogen");
        let roomlists_selfCreator = await Room.find({
            creator: req.user._id
        }, "name  slogen")
        roomlists = roomlists_public.concat(roomlists_selfCreator)
        res.send(roomlists);
    } catch (err) {
        console.log(err);
    }
};