exports.up = (knex) =>
  knex.schema.createTable("dishes", (table) => {
    // Define uma coluna 'id' como uma chave primária autoincrementável.
    table.increments("id");

    // Define uma coluna 'image' como binária para armazenar imagens.
    table.binary("image");

    // Define uma coluna 'name' para armazenar o nome do prato como texto.
    table.text("name");

    // Define uma coluna 'description' para armazenar a descrição do prato como texto.
    table.text("description");

    // Define uma coluna 'price' para armazenar o preço do prato como decimal com precisão de 10 dígitos e 2 casas decimais, não pode ser nulo.
    table.decimal("price", 10, 2).notNullable();

    // Define uma coluna 'user_id' para armazenar o ID do admistrador que criou o prato, com uma referência à tabela 'users'.
    table.integer("user_id").references("id").inTable("users");

    // Define uma coluna 'created_at' para armazenar a data e a hora de criação do registro, com valor padrão sendo a data e a hora atuais.
    table.timestamp("created_at").default(knex.fn.now());

    // Define uma coluna 'updated_at' para armazenar a data e a hora da ultima atualização do registro, com valor padrão sendo a data e a hora atuais.
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => 
// Remove a tabela 'dishes' caso a migração seja revertida.
knex.schema.dropTable("dishes");
