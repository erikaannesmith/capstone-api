var Style = require('../models/styles')

function index(req, res, next) {
  let designerId = 3
  Style.all(designerId)
    .then(styles => {
      res.status(201).json(styles)
    })
}

module.exports = {index}