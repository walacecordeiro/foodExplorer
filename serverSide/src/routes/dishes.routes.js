// Importa o módulo 'Router' do 'Express' para cirar um roteador.
const { Router } = require("express");

// Importa o controlador 'DishesController.js'. que é uma classe responsável por gerenciar as operações relacionadas aos pratos.
const DishesController = require("../controllers/DishesController");

// Cria um novo roteador chamado 'dishesRoutes' específico para as rotas de pratos.
const dishesRoutes = Router();

// Cria uma instância do controlador 'DishesController.js' para lidar com as operações relacionadas aos pratos.
const dishesController = new DishesController();

// Define uma rota GET ("/") que delega o controle ao método 'index' do controlador 'DishesController.js'.
dishesRoutes.get("/", dishesController.index);

// Define uma rota POST ("/:user_id") que delega o controle ao método 'create' do controlador 'DishesController.js'.
dishesRoutes.post("/:user_id", dishesController.create);

// Define uma rota GET ("/:id") que delega o controle ao método 'show' do controlador 'DishesController.js'.
dishesRoutes.get("/:id", dishesController.show);

// Derfine uma rota DELETE ("/:id") que delega o controle ao método 'delete' do controlador 'DishesController.js'.
dishesRoutes.delete("/:id", dishesController.delete);

// Exporta o roteador 'dishesRoutes' para ser utilizado em outros lugares do aplicativo.
module.exports = dishesRoutes;
