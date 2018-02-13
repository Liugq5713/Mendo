const mongoose = require("mongoose");
const Room = mongoose.model("room");
module.exports = async function (req, res, next) {
    try {
        let roomlists = await Room.find({}, { roomname: true });
        res.send(roomlists);
    } catch (err) {
        console.log(err);
    }
};