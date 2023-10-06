// Importa o módulo 'Router' do 'Express' para cirar um roteador.
const { Router } = require("express");

// Importa o controlador de pratos. que é uma classe responsável por gerenciar as operações relacionadas aos pratos.
const DishesController = require("../controllers/DishesController");

// Cria um novo roteador chamado 'dishesRoutes' específico para as rotas de pratos.
const dishesRoutes = Router();

// Cria uma instância do controlador de pratos para lidar com as operações relacionadas aos pratos.
const dishesController = new DishesController();

// Define uma rota POST ("/:user_id") que delega o controle ao método 'create' do controlador de pratos.
dishesRoutes.post("/:user_id", dishesController.create);

// Define uma rota GET ("/:id") que delega o controle ao método 'show' do controlador de pratos.
dishesRoutes.get("/:id", dishesController.show);

// Exporta o roteador 'dishesRoutes' para ser utilizado em outros lugares do aplicativo.
module.exports = dishesRoutes;
