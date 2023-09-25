const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
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
  password: {
    type: String,
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
},
{
    versionKey: false,
    timestamps: true,
}
);

module.exports = mongoose.model('user', UserScheme);
