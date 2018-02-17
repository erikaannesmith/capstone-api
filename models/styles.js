const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Style = {
  all: function(designerId) {
    return database.raw('SELECT * FROM styles WHERE designer_id = ?', [designerId])
      .then(function(style) {
        return style.rows
      })
  }
}

module.exports = Style