module.exports = function (io) {
    // ---- 聊天功能添加中
    io.on("connection", (socket) => {
        console.log("one person", socket.id);

        socket.on("SEND_MESSAGE", (data) => {
            console.log("data", data);
            io.emit("RECEIVE_MESSAGE", data);
        });
        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
        socket.on("join", (data) => {
            console.log(data)
        })
    });
}