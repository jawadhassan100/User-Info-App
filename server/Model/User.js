const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  FullName: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
});
module.exports = mongoose.model("User", UserSchema);
