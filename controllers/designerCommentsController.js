let DesignerComment = require('../models/designerComment')

function index(req, res, next) {
  let path = req._parsedOriginalUrl.pathname
  let designerId = path.split('/')[4]
  DesignerComment.all(designerId)
    .then(comments => {
      res.status(201).json(comments)
    })
}

function create(req, res, next) {
  let date = req.body.date
  let body = req.body.body
  let designer_id = req.body.designer_id
  if (!date) {
    return res.status(422).send({ error: "Date must be filled out." })
  } else if (!body) {
    return res.status(422).send({ error: "Body must be filled out." })
  } else if (!designer_id) {
    return res.status(422).send({ error: "Designer ID must be provided." })
  }
  DesignerComment.new(date, body, designer_id)
    .then((comment) => {
      res.status(201).json(comment)
    })
}

function destroy(req, res, next) {
  let designerId = req.body.designer_id
  let commentId = req.params.id
  // let pry = require('pryjs'); eval(pry.it)
  DesignerComment.find(designerId, commentId)
    .then(comment => {
      if (!comment) {
        return res.sendStatus(404)
      }
      else {
        DesignerComment.destroy(designerId, commentId)
        return res.sendStatus(200)
      }
    })
}

module.exports = {index, create, destroy}