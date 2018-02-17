exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE styles(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    description TEXT,
    designer_id INT,
    FOREIGN KEY(designer_id) REFERENCES designers(id) 
  )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE styles`
  return knex.raw(dropQuery)
}