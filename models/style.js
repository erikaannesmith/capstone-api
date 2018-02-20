const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Style = {
  all: function(designerId) {
    return database.raw('SELECT * FROM styles WHERE designer_id = ?', [designerId])
      .then(function(style) {
        return style.rows
      })
  },
  new: function(name, description, designer_id) {
    return database.raw('INSERT INTO styles (name, description, designer_id) VALUES (?, ?, ?) RETURNING *',
    [name, description, designer_id])
      .then(function(style) {
        return style.rows[0]
      })
  },
  find: function(designerId, styleId) {
    return database.raw('SELECT * FROM styles WHERE designer_id = ? AND id = ?', [designerId, styleId])
      .then(function(style) {
        return style.rows[0]
      })
  }
}

module.exports = Style