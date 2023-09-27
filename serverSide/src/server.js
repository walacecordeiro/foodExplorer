// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Importa o módulo de rotas personalizadas de um arquivo chamado 'index.js' que está na pasta 'routes'.
const routes = require("./routes");

// Inicializa o aplicativo Express.
const app = express();

// Adiciona middleware para permitir o parsing de JSON no corpo das solicitações.
app.use(express.json());

// Adiciona as rotas definidas no módulo 'routes' ao aplicativo.
app.use(routes);

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
