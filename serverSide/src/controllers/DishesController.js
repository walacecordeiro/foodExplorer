const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(request, response) {
    // Extrai os dados do corpo da solicitação.
    const { name, description, category, ingredients, price } = request.body;

    const user_id = request.user.id;

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
    return response.json();
  }

  async update(request, response) {
    const { id } = request.params;
    const imageFileName = request.file.filename;

    const diskStorage = new DiskStorage();

    const dish = await knex("dishes").where({ id }).first();

    if (!dish) {
      throw new AppError(
        "Este prato não existe, não está em nossa base de dados"
      );
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);
    dish.image = filename;

    await knex("dishes").update(dish).where({ id });

    return response.json(dish);
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

  // Define um método 'index' que lida com a busca de pratos com base em critérios, como nome e ingredientes.
  async index(request, response) {
    // Obtem os parâmetros de consulta da solicitação, incluindo 'name' e 'ingredients'.
    const { name, ingredients } = request.query;

    let dishes;

    if (ingredients) {
      // Se 'ingredients' estiver presente nos parâmetros de consulta, ele contém uma lista de ingredientes separados por vírgulas.
      // Divide essa lista em um array de ingredientes.
      const filterIngredients = ingredients
        .split(",")
        .map((item) => item.trim());

      // Usa o Knex para buscar pratos com base nos ingredientes especificados e seus ingredientes associados.
      dishes = await knex("dishes")
        .select([
          "dishes.id as dish_id",
          "dishes.name as dish_name",
          "ingredients.id as ingredient_id",
          "ingredients.name as ingredient_name",
          "category.name as category_name",
        ])
        .innerJoin("ingredients", "dishes.id", "ingredients.dishes_id")
        .innerJoin("category", "dishes.id", "category.dishes_id")
        .whereIn("ingredients.name", filterIngredients)
        .orderBy("dishes.name");
    } else {
      // Se 'ingredients' não estiver presente nos parâmetros de consulta, realiza uma busca por nome de prato.
      // Usa o Knex para buscar pratos cujo nome corresponda ao valor fornecido, e seus ingredientes associados.
      dishes = await knex("dishes")
        .select([
          "dishes.id as dish_id",
          "dishes.name as dish_name",
          "ingredients.id as ingredient_id",
          "ingredients.name as ingredient_name",
          "category.name as category_name",
        ])
        .innerJoin("ingredients", "dishes.id", "ingredients.dishes_id")
        .innerJoin("category", "dishes.id", "category.dishes_id")
        .whereLike("dishes.name", `%${name}%`)
        .orderBy("dishes.created_at", "asc");
    }
    // Organiza os resultados em um formato adequado para retornar.
    const formattedDishes = {};

    dishes.map((dish) => {
      const {
        dish_id,
        dish_name,
        ingredient_id,
        ingredient_name,
        category_name,
      } = dish;

      if (!formattedDishes[dish_id]) {
        formattedDishes[dish_id] = {
          id: dish_id,
          name: dish_name,
          category: category_name,
          ingredients: [],
        };
      }

      if (ingredient_id) {
        formattedDishes[dish_id].ingredients.push({
          id: ingredient_id,
          name: ingredient_name,
        });
      }
    });

    // Retorna a lista dos pratos resultante em formato JSON como resposta.
    return response.json(Object.values(formattedDishes));
  }
}

module.exports = DishesController;
