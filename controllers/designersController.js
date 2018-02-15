var Designer = require('../models/designer')

function index(req, res, next) {
  let id = 2
  Designer.all(id)
    .then(designers => {
      res.status(201).json(designers)
    })
}

module.exports = {index}