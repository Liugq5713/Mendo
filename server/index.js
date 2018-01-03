const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");

const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const passport = require("passport");
const GitHubStrategy = require("passport-github");
const LocalStrategy = require("passport-local");
const keys = require("./config/keys");

require("./models/User");
require("./services/signup");
require("./services/login");
require("./services/githubauth");

const signup = require("./routers/signup");
const checkuser = require("./routers/checkuser");
const login = require("./routers/login");
const githubHandler = require("./routers/githubauth");

const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(require("cookie-parser")());

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

// ---DB---
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(keys.MongoDBURI, { useMongoClient: true }, err => {
  if (err) {
    console.error(" db connection error: " + err.message);
  }
});

// --- 输出日志
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "/log/access.log"),
  {
    flags: "a"
  }
);
app.use(morgan("short", { stream: accessLogStream }));

// ----
app.use("/api", signup);
app.use("/api", login);
app.use("/api", checkuser);
app.use("/auth", githubHandler);

// ----

//--- 监听接口
app.listen(5000, () => {
  console.log("server start");
});
