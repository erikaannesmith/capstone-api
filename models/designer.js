const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Designer = {
  all: function(id) {
    return database.raw('SELECT * FROM designers WHERE user_id = ?', [id])
      .then(designers => {
        return designers.rows
      })
  },
  new: function(company, contact, phone, email, user_id) {
    return database.raw('INSERT INTO designers (company, contact, phone, email, user_id) VALUES (?, ?, ?, ?, ?) RETURNING *', 
    [company, contact, phone, email, user_id])
      .then(function(designer) {
        return designer.rows[0]
      })
  }
}

module.exports = Designer