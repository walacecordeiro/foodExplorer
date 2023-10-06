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
      ingredients,
    });
  }

  // Define um método 'delete' que lida com a exclusão de um prato com base no ID.
  async delete(request, response) {
    // Obtém o ID do prato a ser excluído dos parâmetros da solicitação.
    const { id } = request.params;

    // Utiliza o Knex para executar uma operação de exclusão no banco de dados, onde o ID corresponde ao prato a ser excuído.
    await knex("dishes").where({ id }).delete();

    // Retorna uma resposta JSON vazia para indicar que a exclusão foi bem-sucedida.
    return response.json();
  }

  async index(request, response) {
    const { name, ingredients } = request.query;

    let dishes;

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((item) => item.trim());

      dishes = await knex("ingredients")
        .select([
          "dishes.id as dish_id",
          "dishes.name as dish_name",
          "ingredients.id as ingredient_id",
          "ingredients.name as ingredient_name",
        ])
        .whereIn("ingredients.name", filterIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dishes_id")
        .orderBy("dishes.name");
    } else {
      dishes = await knex("dishes")
        .whereLike("name", `%${name}%`)
        .orderBy("created_at", "asc");
    }

    return response.json(dishes);
  }
}

module.exports = DishesController;
