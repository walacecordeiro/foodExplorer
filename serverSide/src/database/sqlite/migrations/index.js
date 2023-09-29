// Importa o módulo 'sqliteConnection' que é responsável por estabelecer a conexão com o banco de dados SQLite.
const sqliteConnection = require("../../sqlite");
// Importa a migração específica 'createUsers', que contém a definição da tabela de usuários.
const createUsers = require("./createUsers");

// Define uma função assíncrona para executar as migrações.
async function migrationsRun() {
  // Concatena todas as migrações (consultas SQL) em um único string.
  const schemas = [createUsers].join("");

  // Estabelece uma conexão com o banco de dados SQLite usando a função 'sqliteConnection()'.
  // Em seguida, executa as migrações no banco de dados.
  sqliteConnection()
    .then((db) => db.exec(schemas)) // Executa as migrações.
    .catch((error) => console.error(error)); // Trata erros, se houverem.
}

// Exporta a função 'migrationsRun' para que ela possa ser utilizada em outras partes do aplicativo.
module.exports = migrationsRun