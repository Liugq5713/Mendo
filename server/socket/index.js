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
    });

    const nsp = io.of("/test");
    nsp.on("connection", (socket) => {
        // console.log("test connected");
        socket.emit('hi', 'everyone!');
    })

    const nsp2 = io.of("/test2");
    nsp2.on("connection", (socket) => {
        console.log("test2 connected");
        socket.emit('hi', 'everyone!');
    })

}