const mongoose = require("mongoose");
const crypto = require("crypto");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
});

UserSchema.pre("save", function(next) {
  var content = this.password + "solt";
  var sha = crypto.createHash("sha1");
  sha.update(content);
  this.password = sha.digest("hex");
  next();
});

mongoose.model("user", UserSchema);
