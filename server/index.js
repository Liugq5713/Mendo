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

require("./db");
require("./services/signup");
require("./services/login");
require("./services/githubauth");

var app = express();

// 设置cookie
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

//组织路由
app.use("/api", require("./controllers"));
app.use("/auth", require("./controllers/room/githubauth"));

module.exports = app;
