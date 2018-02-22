const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var StyleComment = {
  all: function(id) {
    return database.raw('SELECT * FROM style_comments WHERE style_id = ?', [id])
      .then(function(comments) {
        return comments.rows
      })
  },
  new: function(date, body, id) {
    return database.raw('INSERT INTO style_comments (date, body, style_id) VALUES (?, ?, ?) RETURNING *', 
    [date, body, id])    
      .then(function(comment) {
        return comment.rows[0]
      })
  }
}

module.exports = StyleComment