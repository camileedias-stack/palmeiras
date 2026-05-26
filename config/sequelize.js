// Importando a ORM Sequelize
import { Sequelize } from "sequelize";

// Definindo os dados de conexão com o banco de dados
// Parâmetros: ('nome_do_banco', 'usuario', 'senha', { configurações })
const connection = new Sequelize('db_atividade_dw2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

// Exportando o módulo
export default connection;