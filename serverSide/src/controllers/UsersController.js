// Importa a classe 'AppError' que permite criar erros personalizados.
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

// Define uma classe chamada UsersController para gerenciar operações relacionadas a usuários.
class UsersController {
  // Define um método 'create' que lida com a criação de usuários.
  async create(request, response) {
    // Extrai os dados do corpo da solicitação JSON usando 'request.body'.
    let { name, email, password, isAdmin } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    if (isAdmin === undefined) {
      isAdmin = false;
    }

    await database.run(
      "INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, ?)",
      [name, email, password, isAdmin]
    );

    return response.status(201).json();
  }
}

// Exporta a classe 'UsersController' para ser utilizada em outras partes do aplicativo.
module.exports = UsersController;
