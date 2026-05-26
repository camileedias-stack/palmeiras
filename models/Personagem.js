import { Sequelize } from "sequelize";
import connection from "../config/sequelize.js"; // ajuste o caminho da sua conexão se necessário

const Personagem = connection.define('personagens', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fase_rotina: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar_url: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

export default Personagem;