exports.seed = function (knex, Promise) {
  return knex.raw('TRUNCATE styles RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO styles (name, description, designer_id) VALUES (?, ?, ?)',
          ["Alexandra Dress", "Mini with frills; cherry print", 2]
        ),
        knex.raw(
          'INSERT INTO styles (name, description, designer_id) VALUES (?, ?, ?)',
          ['Emma Blouse', 'Structured shoulders with tassle waist-cinche', 3]
        ),
        knex.raw(
          'INSERT INTO styles (name, description, designer_id) VALUES (?, ?, ?)',
          ["Ella Pant", "Cigarette shape with elastic waist; checkered print", 3]
        )
      ])
    })
}