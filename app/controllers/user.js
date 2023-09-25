const model = require("../models/user");

const options = {
    page: 1,
    limit: 10
};

exports.getData = (req, res) => {
  model.paginate({}, options, (err, docs) => {
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
      res.send({ users: docs });
    }
  });
};
