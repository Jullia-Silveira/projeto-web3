const express = require("express");
const router = express.Router();
const vehiclesCtrl = require("../controllers/vehicles");



//cadastrar um veiculo
router.post("/", vehiclesCtrl.createOne);

//buscar todos os veiculos
router.get("/", vehiclesCtrl.getAll);

//buscar um veiculo 
router.get("/:id", vehiclesCtrl.getOne);

//atualizar um veiculo
router.put("/:id", vehiclesCtrl.changeOne);

//remover um veiculo
router.delete("/:id", vehiclesCtrl.removeOne);


module.exports = router;
