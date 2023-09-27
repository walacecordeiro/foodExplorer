// Importa os módulos necessários para trabalhar com SQLite.
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

// Define essa função assíncrona para estabelecer a conexão com o banco de dados.
async function sqliteConnection() {
  // Configura a conexão com o banco de dados
  const database = await sqlite.open({
    // Caminho para o arquivo do banco de dados - OBS: caso o arquivo não exista ele será gerado automaticamente.
    filename: path.resolve(__dirname, "..", "database.db"),
    // Usa o driver sqlite3 para SQLite.
    driver: sqlite3.Database,
  });

  // Retorna a conexão com o banco de dados.
  return database;
}

// Exporta a função 'sqliteConnection' para que ela possa ser utilizada em outras partes do aplicativo.
module.exports = sqliteConnection;
