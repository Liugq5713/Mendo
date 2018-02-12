module.exports = (req, res, next) => {
    //Set HTTP method to GET
    req.method = 'GET'
    res.redirect("/room/" + req.params.roomId);
}