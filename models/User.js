// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
  fullname: String,
  email: String,
  phone: Number,

});

const User = mongoose.model('User', userSchema);

module.exports = User;
