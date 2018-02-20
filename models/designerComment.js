const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var DesignerComment = {
  all: function(id) {
    return database.raw('SELECT * FROM designer_comments WHERE designer_id = ?', [id])
      .then(function(comments) {
        return comments.rows
      })
  },
  new: function(date, body, id) {
    return database.raw('INSERT INTO designer_comments (date, body, designer_id) VALUES (?, ?, ?) RETURNING *',
    [date, body, id])
      .then(function(comment) {
        return comment.rows[0]
      })
  }
}

module.exports = DesignerComment;

