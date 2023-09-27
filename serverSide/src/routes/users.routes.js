// Importa o módulo 'Router' do 'Express' para cirar um roteador.
const { Router } = require("express");

// Cria um novo roteador chamado 'userRoutes' específico para as rotas de usuário.
const usersRoutes = Router();

// Defini uma rota POST para a raiz do roteador '/users'.
usersRoutes.post("/", (request, response) => {
  // Extrai os dados do corpo da solicitação JSON usando 'request.body'.
  const { name, email, password } = request.body;
  // Envia uma resposta JSON com os dados rebebidos.
  response.json({ name, email, password });
});

// Exporta o roteador 'userRoutes' para ser utilizado em outros lugares do aplicativo.
module.exports = usersRoutes;
