//importando módulos (dependências)
const { PORT } = require("dotenv").config().parsed;
const express = require("express");
const app =  express();

//Middleware
app.use(express.json());


//mapeamento das rotas 

const vehicles = require("../routes/vehicles");
app.use("/vehicles", vehicles);

//habilitando a Aplicação
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))