const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model('user', UserScheme);
