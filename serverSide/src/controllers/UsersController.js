// Importa a função 'hash' do módulo 'bcryptjs' para criptografar dados sensíveis.
const { hash } = require("bcryptjs");

// Importa a classe 'AppError' que permite criar erros personalizados.
const AppError = require("../utils/AppError");

// Importa o módulo 'sqliteConnection' que é responsável por extabelecer a conexão com o banco de dados SQLite.
const sqliteConnection = require("../database/sqlite");

// Define uma classe chamada UsersController para gerenciar operações relacionadas a usuários.
class UsersController {
  // Define um método 'create' que lida com a criação de usuários.
  async create(request, response) {
    // Extrai os dados do corpo da solicitação JSON usando 'request.body'.
    let { name, email, password, isAdmin } = request.body;

    // Estabelece uma conexão com o banco de dados SQLite.
    const database = await sqliteConnection();

    // Verifica se ja existe um usuário com o mesmo endereço de e-mail no banco de dados.
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    // Se um usuário com o mesmo e-mail já existe, lança um erro personalizado.
    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    // Se o campo 'isAdmin' não estiver definido na solicitação, define o campo como 'false' por padrão.
    if (isAdmin === undefined) {
      isAdmin = false;
    }

    // Criptografa a senha fornecida usando o 'bcryptjs' com um fator de custo 8.
    const hashedPassword = await hash(password, 8);

    // Insere os dados do novo usuário no banco de dados.
    await database.run(
      "INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, isAdmin]
    );

    // Retorna uma resposta com o código de status 201 (Created) para indicar que a operação de criação foi bem-sucedida.
    return response.status(201).json();
  }
}

// Exporta a classe 'UsersController' para ser utilizada em outras partes do aplicativo.
module.exports = UsersController;
