// Define uma classe chamada 'AppError' para criar objetos de erro personalizados.
class AppError {
  // Declara as propriedades 'message' (mensagem de erro) e 'statusCode' (código de status HTTP).
  message;
  statusCode;

  // O construtor da classe rebebe uma mensagem e um código de status HTTP (padrão é 400 - Bad Request).
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

// Exporta a classe 'AppError' para ser utilizada em outras partes do aplicativo.
module.exports = AppError;
