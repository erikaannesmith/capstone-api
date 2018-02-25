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
  },
  find: function(id) {
    return database.raw('SELECT * FROM designers WHERE id = ?', [id])
      .then(function(designer) {
        return designer.rows[0]
      })
  },
  edit: function(id, company, contact, phone, email) {
    return database.raw('UPDATE designers SET company = ?, contact = ?, phone = ?, email = ? WHERE id = ?', [company, contact, phone, email, id])
      .then(function(designer) {
        return designer
      })
  }
}

module.exports = Designer