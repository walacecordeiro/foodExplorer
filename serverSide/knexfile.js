const path = require("path");

module.exports = {
  development: {
    // Define o ambiente de desenvolvimento para configuração.
    client: "sqlite3",
    connection: {
      // Especifica o caminho para o arquivo do banco de dados SQLite.
      filename: path.resolve(__dirname, "src", "database", "database.db"),
    },

    // Define um pool de conexões que executará o comando 'PRAGMA foreign_keys = ON' após criar uma nova conexão.
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb),
    },

    migrations: {
      // Define o diretório onde as migrações do banco de dados estão localizadas.
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },

    // Configura o uso de valores nulos como padrão.
    useNullAsDefault: true,
  },
};
