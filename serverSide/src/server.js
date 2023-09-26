// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Inicializa o aplicativo Express.
const app = express();

// Define uma rota para /users no servidor que responde a solicitação POST.
app.post("/users", (request, response) => {
  // Quando uma solicitação POST é feita para a rota /users, envia uma resposta com o texto específicado.
  response.send("Método POST funcionou!");
});

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
