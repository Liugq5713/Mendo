const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const http = require("http");

const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const passport = require("passport");
const GitHubStrategy = require("passport-github");
const LocalStrategy = require("passport-local");
const keys = require("./config/keys");

require("./db")
require("./models/User");
require("./models/Room");
require("./services/signup");
require("./services/login");
require("./services/githubauth");

// ----

var app = express();
var server = http.createServer(app);
const io = require("socket.io").listen(server);

const connectIO = require("./socket")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    name: "mendo",
    saveUninitialized: true, // saved new sessions
    resave: false, // do not automatically write to the session store
    secret: keys.sessionSecret,
    cookie: { user: "default", maxAge: 14 * 24 * 60 * 60 * 1000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", require("./routers/signup"));
app.use("/api", require("./routers/login"));
app.use("/api", require("./routers/checkuser"));
app.use("/auth", require("./routers/githubauth"));
app.get("/api/getroomlist", require("./services/room").getRoomList)
app.get("/api/room/:roomId", require("./socket")(io))
//监听
server.listen("5000", () => {
  console.log("port 5000 is listening");
});
