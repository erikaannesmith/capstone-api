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

function destroy(req, res, next) {
  let commentId = req.params.id
  let styleId = req.baseUrl.split('/')[6]
  StyleComment.find(commentId, styleId)
    .then(comment => {
      if (comment.rows.length === 0) {
        return res.sendStatus(404)
      } else {
        StyleComment.destroy(commentId, styleId)
        return res.sendStatus(200)
      }
    })
}

module.exports = {index, create, destroy}