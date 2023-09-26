const { default: mongoose } = require("mongoose");
const model = require("../models/user");

const options = {
  page: 1,
  limit: 10,
};

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
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

exports.updateSingle = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(id) }, body, (err, docs) => {
    res.send({
      users: docs,
    });
  });
};

exports.deleteSingle = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, (err, docs) => {
    res.send({
      users: docs,
    });
  });
};
