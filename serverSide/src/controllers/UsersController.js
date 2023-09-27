// Define uma classe chamada UsersController para gerenciar operações relacionadas a usuários.
class UsersController {
  // Define um método 'create' que lida com a criação de usuários.
  create(request, response){
    // Extrai os dados do corpo da solicitação JSON usando 'request.body'.
    const { name, email, password } = request.body;
    // Envia uma resposta JSON com os dados rebebidos no corpo da solicitação e define o código de status HTTP como 201 (created).
    response.status(201).json({ name, email, password });
  }
}

// Exporta a classe 'UsersController' para ser utilizada em outras partes do aplicativo.
module.exports = UsersController;