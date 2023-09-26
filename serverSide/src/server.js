// Importa o módulo 'express' para criar um servidor web.
const express = require("express");

// Inicializa o aplicativo Express.
const app = express();

// Define a porta em que o servidor irá escutar as solicitações HTTP.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando estiver pronto.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
