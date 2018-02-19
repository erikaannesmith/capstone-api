exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE designer_comments(
    id SERIAL PRIMARY KEY NOT NULL,
    date DATE,
    body TEXT,
    designer_id INT,
    FOREIGN KEY(designer_id) REFERENCES designers(id) 
  )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE designer_comments`
  return knex.raw(dropQuery)
}