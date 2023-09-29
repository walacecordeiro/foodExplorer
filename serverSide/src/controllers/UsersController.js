// Importa a função 'hash' do módulo 'bcryptjs' para criptografar dados sensíveis.
const { hash, compare } = require("bcryptjs");

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

  // Define um método 'update' que lida com a atualização de informações de usuários.
  async update(request, response) {
    // Extrai os dados do corpo da solicitação JSON, incluindo 'name', 'email', 'password' e 'old_password'.
    const { name, email, password, old_password } = request.body;

    // Extrai o ID do usuário a ser atualizado dos parâmetros da URL.
    const { id } = request.params;

    // Estabelece uma conexão com o banco de dados SQLite.
    const database = await sqliteConnection();

    // Procura o usuário com base no ID fornecido.
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    // Se o usuário não for encontrado, lança um erro personalizado.
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    // Verifica se o e-mail atualizado já está em uso por outro usuário, excluindo o próprio usuário.
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?) AND id != (?)",
      [email, id]
    );

    // Se o e-mail já estiver em uso, lança um erro personalizado.
    if (userWithUpdatedEmail) {
      throw new AppError("Este e-mail já está em uso.");
    }

    // Atualiza os campos 'name' e 'email' do usuário com os novos valores.
    user.name = name;
    user.email = email;
    
    // Verifica se uma nova senha (password) foi fornecida, mas a senha antiga (old_password) não foi fornecida.
    if (password && !old_password) {
      // Se a senha antiga não foi fornecida, lança um erro personalizado indicando que ela é necessária para definir uma nova senha.
      throw new AppError(
        "Você precisa informar a senha antiga para definir a nova senha"
      );
    }

    // Verifica se tanto a nova senha quando a senha antiga foram fornecidas.
    if (password && old_password) {
      // Verifica se a senha antiga (old_password) corresponde à senha atual do usuário no banco de dados.
      const checkOldPassword = await compare(old_password, user.password);

      // Se a senha antiga não corresponder à senha atual, lança um erro personalizado.
      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      // Se a senha antiga corresponder à senha atual, prossegue com a atualização da senha.
      // A nova senha é criptografada usando 'hash' do módulo 'bcryptjs' com um fator de custo 8.
      user.password = await hash(password, 8);
    }

    // Executa uma sonsulta SQL para atualizar os dados do usuário no banco de dados, incluindo a atualização do campo 'updated_at'.
    await database.run(
      `
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = ?
      WHERE id = ?`,
      [user.name, user.email, user.password, new Date(), id]
    );

    // Retorna uma resposta JSON vazia para indicar que a operação de atualização foi bem-sucedida.
    return response.json();
  }
}

// Exporta a classe 'UsersController' para ser utilizada em outras partes do aplicativo.
module.exports = UsersController;
