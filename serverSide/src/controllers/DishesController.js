const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    // Extrai os dados do corpo da solicitação.
    const { name, description, category, ingredients, price } = request.body;
    // Extrai o ID do parâmetro na URL
    const { user_id } = request.params;

    // Insere os dados do prato na tabela 'dishes' e obtém o ID gerado.
    const [dishes_id] = await knex("dishes").insert({
      name,
      description,
      price,
      user_id,
    });

    // Define os dados da categoria para inserção.
    const categoriesInsert = {
      name: category, // A categoria é um único valor.
      user_id,
      dishes_id,
    };

    // Insere os dados da categoria na tabela 'category'.
    await knex("category").insert(categoriesInsert);

    // Define os dados dos ingredientes para inserção.
    const ingredientsInsert = ingredients.map((name) => {
      return {
        name,
        dishes_id,
      };
    });

    // Insere os dados dos ingredientes na tabela 'ingredients'.
    await knex("ingredients").insert(ingredientsInsert);

    // Retorna uma resposta vázia para indicar que a operação foi bem-sucedida.
    response.json();
  }
}

module.exports = DishesController;
