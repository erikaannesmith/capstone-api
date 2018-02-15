const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Designer = {
  all: function(id) {
    // debugger;
    return database.raw('SELECT * FROM designers WHERE user_id = ?', [id])
      .then(designers => {
        return designers.rows
      })
  }
}

module.exports = Designer