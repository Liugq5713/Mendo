const mongoose = require("mongoose");
const room = mongoose.model("room");

module.exports = function (req, res) {
    const roomId = req.params.roomId;
    room.findById(roomId, function (err, room) {
        const msgsize = room.msgs.length;
        if (msgsize < 20) {
            res.send(room.msgs)
        } else {
            res.send(room.msgs.slice(msgsize - 20, msgsize - 1))
        }
    })
}