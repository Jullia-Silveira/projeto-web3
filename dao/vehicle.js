const db = require("../infra/connection");
const { ulid } = require("ulid");

class Vehicle {
  create(data, callback) {
    const { id, plate, brand, model, color } = data;

    const sql = `INSERT INTO vehicles
                  (id, plate, brand, model, color) 
                  VALUES 
                  ('${ulid()}', '${id}', '${plate}', '${brand}', '${model}', '${color}')`;

    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = `SELECT * FROM vehicles`;
    db.all(sql, callback);
  }

  findOne(id, callback) {
    const sql = `SELECT * FROM vehicles WHERE id = '${id}'`;
    db.get(sql, callback);
  }

  deleteOne(id, callback) {
    const sql = `DELETE FROM vehicles WHERE id = '${id}'`;
    db.run(sql, callback);
  }

  updatePartial(id, data, callback) {
    let vehicleData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < vehicleData.length; i++) {
      fields.push(`${vehicleData[i][0]} = '${vehicleData[i][1]}'`);
    }

    const sql = `UPDATE vehicles SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);
  }
}

module.exports = new Vehicle();