const mongoose = require("mongoose");
const Room = mongoose.model("room");

module.exports = async function () {
    try {
        let roomlists = await Room.find({}, { room: true });
        return roomlists;
    } catch (err) {
        console.log(err);
    }
}