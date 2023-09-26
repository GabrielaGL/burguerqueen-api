const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 1
  }
},
{
    versionKey: false,
    timestamps: true,
}
);

UserScheme.plugin(mongoosePaginate);


module.exports = mongoose.model('products', UserScheme);