let StyleComment = require('../models/styleComment')

function index(req, res, next) {
  let path = req._parsedOriginalUrl.pathname
  let styleId = path.split('/')[6]
  StyleComment.all(styleId)
    .then(comments => {
      res.status(201).json(comments)
    })
}

function create(req, res, next) {
  let date = req.body.date
  let body = req.body.body
  let style_id = req.baseUrl.split('/')[6]
  StyleComment.new(date, body, style_id)
    .then((comment) => {
      res.status(201).json(comment)
    })
}

module.exports = {index, create}