const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const model = require("../models/user");

const options = {
  page: 1,
  limit: 10,
};

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

const hashPass = (user) => {
  bcrypt.hash(user.password, 5, (error, newHash) => {
    if (error) {
      console.log(error);
      return error;
    }
    user.password = newHash;
    user.save();
    return user;
  });
};

exports.getData = (req, res) => {
  model.paginate({}, options, (err, docs) => {
    res.send({
      users: docs,
    });
  });
};

exports.getSingleData = (req, res) => {
  const { id } = req.params;
  model.findOne({ _id: parseId(id) }, (err, docs) => {
    res.send({
      user: docs,
    });
  });
};

exports.insertData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: err });
    } else {
      const hashData = hashPass(docs);
      res.send({ users: hashData });
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
