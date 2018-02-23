const router = require("express").Router();

// 用户注册-登录-退出-路由
const signup = require("./user/signup");
const login = require("./user/login");
const logout = require("./user/logout");
const checkuser = require("./user/checkuser");
// 房间初始化-获取房间列表-进入房间
const initRoom = require("./room/initRoom");
const getRoomlist = require("./room/getRoomlist");
const enterRoom = require("./room/enterRoom");
const createRoom = require("./room/createRoom");
const updateRoom = require("./room/updateRoom")
//聊天信息的初始化
const getChatMsg = require("./msg/getMsg");

router.post("/login", login);

router.get("/logout", logout);

router.post("/signup", signup);

router.get("/checkuser", checkuser);

router.get("/getroomlist", initRoom, getRoomlist);

router.get("/createroom", createRoom);

router.get("/room/:roomId", enterRoom);

router.get("/getchatmsg/:roomId", getChatMsg);

router.post("/updateroom", updateRoom)

module.exports = router;
