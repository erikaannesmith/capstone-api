var Style = require('../models/style')

function index(req, res, next) {
  console.log(req)
  let path = req._parsedOriginalUrl.pathname
  let designerId = path.split('/')[4]
  Style.all(designerId)
    .then(styles => {
      res.status(201).json(styles)
    })
}

function create(req, res, next) {
  let name = req.body.name
  let description = req.body.description
  let path = req.baseUrl 
  let designer_id = path.split('/')[4]
  if (!name) {
    return res.status(422).send({ error: "Name must be filled out." })
  } else if (!description) {
    return res.status(422).send({ error: "Description must be filled out." })
  }
  Style.new(name, description, designer_id)
    .then((style) => {
      res.status(201).json(style)
    })
}

module.exports = {index, create}