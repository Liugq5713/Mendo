const Mongoose = require("mongoose");
const UserSchema = Mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
});
Mongoose.model("user", UserSchema);
