const config = require("../../../knexfile"); // Importa o arquivo de configuração do Knex para o banco de dados.
const knex = require("knex"); // Importa a biblioteca Knex para criar uma instância de conexão com o banco de dados.

const connection = knex(config.development); // Cria uma instância de conexão com o banco de dados usando a configuração definida para o ambiente de desenvolvimento.

module.exports = connection; // Exporta a instância de conexão com o banco de dados para ser usada em outras partes do aplicativo.
