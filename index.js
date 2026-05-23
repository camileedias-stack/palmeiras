import express from 'express';
import connection from "./config/sequelize.js"; 
import { Personagem, Habilidade, PersonagemHabilidade } from "./config/associations.js";

import elencoController from "./controllers/elencoControllers.js";
import perfilController from "./controllers/perfilControllers.js";
import titulosController from "./controllers/titulosControllers.js";

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.use("/", elencoController);
app.use("/", perfilController);
app.use("/", titulosController);

app.get("/", (req, res) => { res.render("index"); });

// Sincronização e Inicialização
connection.query("create database if not exists db_atividade_dw2;")
.then(() => {
    return connection.sync({ force: false });
})
.then(() => {
    console.log("Banco de dados sincronizado!");
    app.listen(8080, () => {
        console.log("Servidor rodando em http://localhost:8080");
    });
})
.catch((error) => {
    console.log("Erro ao iniciar:", error);
});