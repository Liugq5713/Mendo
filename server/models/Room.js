const mongoose = require("mongoose");
const getTime = require("../tools/getTime")
const Schema = mongoose.Schema;

const RoomSchema = new mongoose.Schema({
    roomname: {
        type: String
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    participant: {
        type: Array
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createDate: {
        type: Date,
        default: getTime()
    },

});

mongoose.model("room", RoomSchema);
