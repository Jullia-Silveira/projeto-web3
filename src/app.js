//1º importando módulos (dependências)
const { PORT } = require("dotenv").config().parsed;
const express = require("express");
const app =  express();

//Middleware
app.use(express.json());

/* IMPLEMENTAÇÃO ALTERNATIVA
const bodyParser = require("body-parser");
app.use(bodyParser.json());
*/

//4º mapeamento das rotas  - está no arquivo na pasta routes.

const vehicles = require("../routes/vehicles");
app.use("/vehicles", vehicles);

//3º inicializando/habilitando a Aplicação
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))