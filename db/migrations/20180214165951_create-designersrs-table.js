exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE designers(
    id SERIAL PRIMARY KEY NOT NULL,
    company TEXT,
    contact TEXT,
    phone TEXT,
    email TEXT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) 
  )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE designers`
  return knex.raw(dropQuery)
}