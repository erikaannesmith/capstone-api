const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var DesignerComment = {
  all: function(id) {
    return database.raw('SELECT * FROM designer_comments WHERE designer_id = ?', [id])
      .then(function(comments) {
        return comments.rows
      })
  }
}

module.exports = DesignerComment;

