exports.seed = function (knex, Promise) {
  return knex.raw('TRUNCATE designers RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO designers (company, contact, phone, email, user_id) VALUES (?, ?, ?, ?, ?)',
          ["Stone Cold Fox", "Elaina Maceijewski", "586-323-8911", "elaina@elaina.com", 1]
        ),
        knex.raw(
          'INSERT INTO designers (company, contact, phone, email, user_id) VALUES (?, ?, ?, ?, ?)',
          ["Planet Blue", "Erika Smith", "313-550-8645", "erika@erika.com", 2]
        ),
        knex.raw(
          'INSERT INTO designers (company, contact, phone, email, user_id) VALUES (?, ?, ?, ?, ?)',
          ["Blue Life", "MacKinley Smith", "586-850-4413", "mac@mac.com", 2]
        )
      ])
    })
}