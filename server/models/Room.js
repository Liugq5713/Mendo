const mongoose = require("mongoose");
const getTime = require("../tools/getTime")

const RoomSchema = new mongoose.Schema({
    roomname: {
        type: String
    },
    participant: {
        type: Array
    },
    creator: {
        type: String
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    createDate: {
        type: Date,
        default: getTime()
    }
});

mongoose.model("room", RoomSchema);
