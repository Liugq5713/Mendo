module.exports = function(io) {
  io.on("connection", socket => {
    console.log("one person", socket.id);
    // 需要一个roomid列表
    socket.join(roomId);
    console.log("has joined");
    socket.to(roomId).emit("connectToRoom", "someone has joined");

    socket.to(roomId).on("SEND_MESSAGE", data => {
      console.log("data", data);
      io.emit("RECEIVE_MESSAGE", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
