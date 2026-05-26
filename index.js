<<<<<<< HEAD
import express from 'express';
// Importação da conexão
import connection from "./config/sequelize.js"; 
// Importação das associações
import { Personagem, Habilidade, PersonagemHabilidade } from "./config/associations.js";

// Controllers
import elencoController from "./controllers/elencoControllers.js";
import perfilController from "./controllers/perfilControllers.js";
import titulosController from "./controllers/titulosControllers.js";

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// --- SINCRONIZAÇÃO (O PASSO 3) ---
connection.sync({ force: false }) 
    .then(() => {
        console.log("Banco de dados sincronizado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar o banco:", error);
    });

// Rotas
app.use("/", elencoController);
app.use("/", perfilController);
app.use("/", titulosController);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080");
=======
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
>>>>>>> ec2907f80b4f1b2b4e92c11d9aa9d3eebe4f163e
});