var Designer = require('../models/designer')

function index(req, res, next) {
  let id = 2
  Designer.all(id)
    .then(designers => {
      res.status(201).json(designers)
    })
}

function create(req, res, next) {
  let company = req.body.company
  let contact = req.body.contact
  let phone = req.body.phone
  let email = req.body.email
  let user_id = req.body.userId
  if (!company || !contact || !phone || !email || !user_id) {
    return res.status(422).send({ error: "All fields must be filled out." })
    Designer.new(company, contact, phone, email, user_id)
      .then((designer) => {
        res.status(201).json(designer)
      })
  }
}

module.exports = {index, create}