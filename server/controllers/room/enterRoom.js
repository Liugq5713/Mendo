module.exports = (req, res, next) => {
    res.redirect("/room/" + req.params.roomId)
}