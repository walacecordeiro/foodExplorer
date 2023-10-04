exports.up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    // Define uma coluna 'id' como uma chave primária autoincrementável.
    table.increments("id");

    // Define uma coluna 'name' para armazenar o nome do prato como texto.
    table.text("name").notNullable();

    // Define uma coluna 'dishes_id' para armazenar o ID do prato associado a esse ingrediente, com uma referência à tabela 'dishes' e opção de exclusão em cascata.
    table
      .integer("dishes_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");
  });

exports.down = (knex) =>
  // Remove a tabela 'dishes' caso a migração seja revertida.
  knex.schema.dropTable("ingredients");
