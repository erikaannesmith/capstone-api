var User = require('../models/user')

function index(req, res, next) {
  User.all()
    .then(users => {
      res.status(201).json(users)
    })
}

module.exports = {index}