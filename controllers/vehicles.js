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



///////////////////////////////////////////////////////
/*
const connDb = require("../infra/connection");
console.log(connDb);


exports.createOne = (req, res) => {
    const { id, plate, brand, model, color } = req.body;
    
    const sql = `INSERT INTO vehicles
                (id, plate, brand, model, color)
                VALUES 
                ('${id}', '${plate}', '${brand}', '${model}', '${color}')`;

    connDb.run(sql, function(err){
        console.log(err);
        if (err) {
         res.status(201).send({ id, plate, brand, model, color });
        } else {
            res.status(400).send({ err });
        }
    });
};

exports.getAll = (req, res) => {

    const sql = "SELECT * FROM vehicles";
    connDb.all(sql, function(err, data) {
        console.log("RODOU", err, data);
        res.send(data);
    });
};

exports.getOne = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);

    const sql = `SELECT * FROM vehicles WHERE id = '${id}'`;
    connDb.get(sql, (err, data) => {
        console.log("==>", err, data);
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err: "Vehicle not found"});
        }
    });
};

//CRIAR DEPOIS
exports.changeOne = (req, res) => res.send("CHANGE ONE");

exports.removeOne = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM vehicles WHERE id = '${id}'`;
    connDb.run(sql, function (err){
        console.log(arguments);
        if(err) res.status(204).end();
    });
    //res.send("REMOVE ONE");
};
*/