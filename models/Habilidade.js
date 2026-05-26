import { Sequelize } from "sequelize";
import connection from "../config/sequelize.js";

const Habilidade = connection.define('habilidades', {
    nome_habilidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

export default Habilidade;