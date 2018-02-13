const mongoose = require("mongoose");
const Room = mongoose.model("room");
module.exports = async function (req, res, next) {
    const roomname = "default";
    try {
        let existingRoom = await Room.findOne({ roomname: roomname });
        if (!existingRoom) {
            await new Room({
                roomname: roomname,
            }).save();
        }
    } catch (err) {
        console.log(err);
    }
    next();
}