const createUsers = `
  CREATE TABLE IF NOT EXISTS --A tabela "users" é criada se ela não existir
  users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, --Coluna de chave primária com autoincremento.
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    isAdmin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT (strftime('%d/%m/%Y às %H:%M', 'now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (strftime('%d/%m/%Y às %H:%M', 'now', 'localtime'))
  )
`;

module.exports = createUsers;
