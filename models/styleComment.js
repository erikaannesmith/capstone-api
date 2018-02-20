const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var StyleComment = {
  all: function(id) {
    return database.raw('SELECT * FROM style_comments WHERE style_id = ?', [id])
      .then(function(comments) {
        return comments.rows
      })
  }
}

module.exports = StyleComment