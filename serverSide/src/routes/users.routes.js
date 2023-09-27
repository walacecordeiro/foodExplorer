// Importa o módulo 'Router' do 'Express' para cirar um roteador.
const { Router } = require("express");

// Importa o controlador de usuários. que é uma classe responsável por gerenciar as operações relacionadas aos usuários.
const UsersController = require("../controllers/UsersController");

// Cria um novo roteador chamado 'userRoutes' específico para as rotas de usuário.
const usersRoutes = Router();

// Cria uma instância do controlador de usuários para lidar com as operações relacionadas aos usuários.
const usersController = new UsersController();

// Define uma rota POST ("/") que delega o controle ao método 'create' do controlador de usuários.
usersRoutes.post("/", usersController.create);

// Exporta o roteador 'userRoutes' para ser utilizado em outros lugares do aplicativo.
module.exports = usersRoutes;
