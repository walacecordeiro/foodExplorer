// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Inicializa o aplicativo Express.
const app = express();

// Adiciona middleware para permitir o parsing de JSON no corpo das solicitações.
app.use(express.json());

// Define uma rota para /users no servidor que responde a solicitação POST.
app.post("/users", (request, response) => {
  // Extrai os dados do corpo da solicitação JSON usando 'request.body'.
  const { name, email, password } = request.body;
  // Envia uma resposta JSON com os dados rebebidos.
  response.json({ name, email, password });
});

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
