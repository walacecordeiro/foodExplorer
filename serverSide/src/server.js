// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Inicializa o aplicativo Express.
const app = express();

// Define uma rota para a raiz do servidor (URL "/") que responde a solicitações GET.
app.get("/", (request, response) => {
  // Quando uma solicitação GET é feita para a raiz, envia uma resposta com o texto especificado.
  response.send("Esse é o caminho para a raiz do servidor");
});

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
