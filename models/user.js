const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var User = {
  all: function() {
    return database.raw('SELECT * FROM users')
      .then(users => {
        return users.rows
      })
  }
}

module.exports = User