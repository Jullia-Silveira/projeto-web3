const Vehicle = require("../dao/vehicle");

exports.createOne = (req, res) => {
  Vehicle.create(req.body, (err) => {
    if (!err) {
      res.status(201).send({});
    } else {
      res.status(400).send({ err });
    }
  });
};

exports.getAll = (req, res) => {
  Vehicle.findAll((err, data) => res.send(data));
};

exports.getOne = (req, res) => {
  Vehicle.findOne(req.params.id, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ errMsg: "Vehicle not found" });
    }
  });
};

exports.changeOne = (req, res) => {
  Vehicle.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};

exports.removeOne = (req, res) => {
  Vehicle.deleteOne(req.params.id, (err) => {
    if (!err) res.status(204).end();
  });
}


