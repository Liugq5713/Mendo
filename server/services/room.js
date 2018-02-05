const mongoose = require("mongoose");
const Room = mongoose.model("room");

module.exports = {
  initRoom: async function (req, res, next) {
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
  },
  // 获取房间信息的中间件
  getRoomlist_MW: async function (req, res, next) {
    try {
      let roomlists = await Room.find({}, { roomname: true });
      res.send(roomlists);
    } catch (err) {
      console.log(err);
    }
    res.end()
  },
  // 获取房间信息的函数
  getRoomlist: async function () {
    try {
      let roomlists = await Room.find({}, { roomname: true });
      return roomlists;
    } catch (err) {
      console.log(err);
    }
  }
};
