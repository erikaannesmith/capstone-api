let StyleComment = require('../models/styleComment')

function index(req, res, next) {
  let path = req._parsedOriginalUrl.pathname
  let styleId = path.split('/')[6]
  // let pry = require('pryjs'); eval(pry.it)
  StyleComment.all(styleId)
    .then(comments => {
      res.status(201).json(comments)
    })
}

module.exports = {index}