const model = require("../models/user");

exports.getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs,
    });
  });
};
