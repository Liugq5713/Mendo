const keys = require("../config/keys");
// ---DB---
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(keys.MongoDBURI, {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
}, err => {
    if (err) {
        console.error(" mongoDB connection error: " + err.message);
    }
});
