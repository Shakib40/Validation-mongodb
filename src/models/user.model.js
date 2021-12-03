const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {type: "string" , required : true},
  last_name: {type: "string" , required : true},
  email: {type: "string" , required : true},
  pincode: {type: "number" , required : true},
  age: {type: "number" , required : true},
  gender: {type: "string" , required : true},
  ip_address: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;