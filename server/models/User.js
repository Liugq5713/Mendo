const Mongoose = require("mongoose");
const UserSchema = Mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
});
const UserModel = Mongoose.model("User", UserSchema);

module.exports = UserModel;
