const mongoose = require("mongoose");
const Room = mongoose.model("room");

module.exports = function (io) {
  io.on("connection", socket => {
    // console.log("socket id ====", socket.id);
    const url = socket.request.headers.referer;
    const roomId = url.split("/").pop();
    // 需要一个roomid列表
    socket.on("join", (data) => {
      socket.join(roomId);
      console.log("server " + roomId);
    });

    socket.on("message", (data) => {
      io.to(roomId).emit("RECEIVE_MESSAGE", data);
      console.log('data', data)
      //将数据存入数据库
      Room.findById(roomId, function (err, room) {
        // console.log('room', room)
        if (err) {
          throw "不能找到当前聊天的房间"
        }
        room.msgs.push(data.message);
        room.save(function (err, res) {
          if (err) {
            throw "聊天信息保存数据库失败"
          }
        })
      })
    });

    socket.on('leave', function () {
      socket.emit('disconnect');
    });

    socket.on('disconnect', function () {
      // 从房间名单中移除
      socket.leave(roomId);
      console.log('user 退出了' + roomId);
    });
  });
};
