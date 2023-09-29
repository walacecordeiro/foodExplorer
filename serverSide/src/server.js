// Importa o módulo 'express-async-errors' para lidar com erros assíncronos automaticamente.
require("express-async-errors");

// Importa a função 'migrationsRun' responsável por executar as migrações do banco de dados.
const migrationsRun = require("./database/sqlite/migrations");

// Importa a classe 'AppError' que permite criar erros personalizados.
const AppError = require("./utils/AppError");

// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Importa o módulo de rotas personalizadas de um arquivo chamado 'index.js' que está na pasta 'routes'.
const routes = require("./routes");

// Executa as migrações do banco de dados para preparar a estrutura do banco de dados.
migrationsRun();

// Inicializa o aplicativo Express.
const app = express();

// Adiciona middleware para permitir o parsing de JSON no corpo das solicitações.
app.use(express.json());

// Adiciona as rotas definidas no módulo 'routes' ao aplicativo.
app.use(routes);

// Middlware de tratamento de erros personalizados.
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    // Se o erro for uma instância de 'AppError', trata-o como um erro conhecido e retorna o 'AppError'.
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  // Se o erro não for uma instância de 'AppError', trata-o como erro interno de servidor.
  return response.status(500).json({
    status: "error",
    message: "Erro interno no servidor",
  });
});

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
