const model = require("../models/user");

exports.getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs,
    });
  });
};

exports.insertData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: "Error" }, 422);
    } else {
      res.send({ data: docs });
    }
  });
};
