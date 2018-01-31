const Room = require("../services/room");

module.exports = function (io) {
  io.on("connection", socket => {
    // console.log("socket id ====", socket.id);
    const url = socket.request.headers.referer;
    const roomId = url.split("/").pop();
    // 需要一个roomid列表
    socket.join(roomId);
    console.log('roomId', roomId)
    socket.to(roomId).emit("connectToRoom", "someone has joined");
    socket.to(roomId).on("SEND_MESSAGE", data => {
      console.log("data", data);
      io.emit("RECEIVE_MESSAGE", data);
    });

    socket.on('leave', function () {
      socket.emit('disconnect');
    });

    socket.on('disconnect', function () {
      // 从房间名单中移除
      socket.leave(roomId);    // 退出房间
      console.log('user 退出了' + roomId);
    });
  });
};
