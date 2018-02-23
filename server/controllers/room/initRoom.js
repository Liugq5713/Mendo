const mongoose = require("mongoose");
const Room = mongoose.model("room");
module.exports = async function (req, res, next) {
    const roomname = "kuchcy和他的朋友们";
    const roomslogen = "欢迎大家提bug"
    try {
        let existingRoom = await Room.findOne({ name: roomname });
        if (!existingRoom) {
            await new Room({
                name: roomname,
                slogen: roomslogen
            }).save();
        }
    } catch (err) {
        console.log(err);
    }
    next();
}