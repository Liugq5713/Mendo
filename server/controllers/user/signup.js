module.exports = passport.authenticate("signup", {
    successRedirect: "/",
    session: true
})