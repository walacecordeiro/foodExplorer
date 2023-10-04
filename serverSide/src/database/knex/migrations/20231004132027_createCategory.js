exports.up = (knex) =>
  knex.schema.createTable("category", (table) => {
    // Define uma coluna 'id' como uma chave primária autoincrementável.
    table.increments("id");

    // Define uma coluna 'name' para armazenar o nome do prato como texto.
    table.text("name").notNullable();

    // Define uma coluna 'user_id' para armazenar o ID do admistrador que criou o prato, com uma referência à tabela 'users'.
    table.integer("user_id").references("id").inTable("users");

    table
      .integer("dishes_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");

    // Define uma coluna 'created_at' para armazenar a data e a hora de criação do registro, com valor padrão sendo a data e a hora atuais.
    table.timestamp("created_at").default(knex.fn.now());
  });

exports.down = (knex) =>
  // Remove a tabela 'dishes' caso a migração seja revertida.
  knex.schema.dropTable("category");
