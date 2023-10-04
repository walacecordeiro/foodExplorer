// Importa o módulo 'Router'do 'Express' para criar um roteador.
const { Router } = require("express");

// Importa as rotas relacionadas aos usuários do arquivo 'users.routes.js'.
const usersRouter = require("./users.routes");
// Importa as rotas relacionadas aos pratos do arquivo 'dishes.routes.js'.
const dishesRouter = require("./dishes.routes");

// Cria um novo roteador chamado 'routes'.
const routes = Router();

// Define que as rotas relacionadas aos usuários estarão sob o caminho '/users'.
routes.use("/users", usersRouter);
// Define que as rotas relacionadas aos pratos estarão sob o caminho '/dishes'.
routes.use("/dishes", dishesRouter);

// Exporta o roteador 'routes' para ser utilizado no aplicativo principal.
module.exports = routes;
