const passport = require("passport");
module.exports = passport.authenticate("signup", {
    successRedirect: "/",
    session: true
})