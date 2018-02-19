let DesignerComment = require('../models/designerComment')

function index(req, res, next) {
  let path = req._parsedOriginalUrl.pathname
  let designerId = path.split('/')[4]
  // let pry = require('pryjs'); eval(pry.it)
  DesignerComment.all(designerId)
    .then(comments => {
      res.status(201).json(comments)
    })
}

module.exports = {index}