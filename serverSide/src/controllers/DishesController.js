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

  // Define um método 'show' para lidar com a exibição de detalhes de um prato específico.
  async show(request, response) {
    // Extrai o ID do prato da solicitação a partir dos parâmetros da URL.
    const { id } = request.params;

    // Consulta o banco de dados para obter os detalhes do prato com o ID fornecido.
    const dishe = await knex("dishes").where({ id }).first();

    // Consulta o banco de dados para obter as categorias associadas a este prato.
    const category = await knex("category").where({ dishes_id: id });

    // Consulta o banco de dados para obter os ingredientes associados a este prato, ordenados por nome.
    const ingredients = await knex("ingredients")
      .where({ dishes_id: id })
      .orderBy("name");

    // Retorna uma resposta JSON com os detalhes do prato, categorias e ingredientes.
    return response.json({
      ...dishe,
      category,
      ingredients
    });
  }
}

module.exports = DishesController;
