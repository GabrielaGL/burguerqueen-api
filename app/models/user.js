const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

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
    required: true,
  },
},
{
    versionKey: false,
    timestamps: true,
}
);

UserScheme.plugin(mongoosePaginate);


module.exports = mongoose.model('user', UserScheme);
