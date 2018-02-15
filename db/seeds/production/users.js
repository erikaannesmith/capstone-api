exports.seed = function (knex, Promise) {
  return knex.raw('TRUNCATE users RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO users (email, password, company) VALUES (?, ?, ?)',
          ["email1", "password1", "company1"]
        ),
        knex.raw(
          'INSERT INTO users (email, password, company) VALUES (?, ?, ?)',
          ["email2", "password2", "company2"]
        ),
        knex.raw(
          'INSERT INTO users (email, password, company) VALUES (?, ?, ?)',
          ["email3", "password3", "company3"]
        )
      ])
    })
}