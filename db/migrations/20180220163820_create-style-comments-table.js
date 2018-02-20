exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE style_comments(
    id SERIAL PRIMARY KEY NOT NULL,
    date DATE,
    body TEXT,
    style_id INT,
    FOREIGN KEY(style_id) REFERENCES styles(id) 
  )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE style_comments`
  return knex.raw(dropQuery)
}