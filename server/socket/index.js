// const Room = require("../helpers/getRoomlist");

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
      console.log("hi")
      io.to(roomId).emit("RECEIVE_MESSAGE", data);
    })


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
