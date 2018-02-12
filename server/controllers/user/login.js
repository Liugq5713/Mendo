module.exports = passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login"
})