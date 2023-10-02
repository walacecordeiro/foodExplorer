const path = require("path");

module.exports = {
  development: {
    // Define o ambiente de desenvolvimento para configuração.
    client: "sqlite3",
    connection: {
      // Especifica o caminho para o arquivo do banco de dados SQLite.
      filename: path.resolve(__dirname, "src", "database", "database.db"),
      // Configura o uso de valores nulos como padrão.
      useNullAsDefault: true,
    },
  },
};
