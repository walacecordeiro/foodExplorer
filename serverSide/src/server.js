// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Inicializa o aplicativo Express.
const app = express();

// Define uma rota que captura parâmetros na URL, como "/pedidos/123/produto".
app.get("/pedidos/:id/:item", (request, response) => {
  // Extrai os valores dos parâmetros da URL usando 'request.params'.
  const { id, item } = request.params;

  // Quando uma solicitação GET é feita para essa rota, envia uma resposta com os valores dos parâmetros.
  response.send(`
    Número do pedido: ${id}
    Item pedido: ${item}
  `);
});

// Define uma rota que usa query parameters na URL, como "/cardapio?page=1&limit=10".
app.get("/cardapio", (request, response) => {
  // Extrai os valores dos query parameters usando 'request.query'.
  const { page, limit } = request.query;

  // Quando uma solicitação GET é feita para essa rota, envia uma resposta com os valores dos query parameters.
  response.send(`
    Página: ${page}
    Mostrar: ${limit}
  `);
});

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
