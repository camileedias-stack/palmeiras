import { Sequelize } from "sequelize";
import connection from "../config/sequelize.js";

const PersonagemHabilidade = connection.define('personagem_habilidades', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nivel_maestria: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

export default PersonagemHabilidade;