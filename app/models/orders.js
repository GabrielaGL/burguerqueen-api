const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema({
  table: {
    type: Number,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  }
},
{
    versionKey: false,
    timestamps: true,
}
);

UserScheme.plugin(mongoosePaginate);


module.exports = mongoose.model('orders', UserScheme);