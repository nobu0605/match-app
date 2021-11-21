const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number,
  date: {
    default: Date.now,
    type: Date,
  },
});
const UserModel = mongoose.model("users", UserSchema);

exports.UserModel = UserModel;
