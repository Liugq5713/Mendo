const mongoose = require("mongoose");
const Room = mongoose.model("room");

module.exports = {
    //  页面首次加载，初始化一个所有人都有的聊天室
    initRoom: async function (req, res, next) {
        const roomname = "test"
        try {
            let existingRoom = await Room.findOne({ roomname: roomname })
            if (existingRoom) {
                res.end()
            } else {
                console.log("here")
                await new Room({
                    roomname: roomname,
                    participant: [],
                    creator: "root"
                }).save()
            }
        } catch (err) {
            console.log(err)
        }
        // Implement the middleware function based on the options object
        next();
    },

    getRoomList: async function (req, res, next) {
        try {
            let roomlists = await Room.find({}, { roomname: true })
            res.send(roomlists)
        } catch (err) {
            console.log(err);
        }
    }
}
