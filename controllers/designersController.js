var Designer = require('../models/designer')

function index(req, res, next) {
  let id = 2
  Designer.all(id)
    .then(designers => {
      res.status(201).json(designers)
    })
}

function show(req, res, next) {
  let id = req.params.id
  Designer.find(id)
    .then(designer => {
      if (!designer) {
        return res.sendStatus(404)
      } else {
        res.json(designer)
      }
    })
}

function create(req, res, next) {
  let company = req.body.company
  let contact = req.body.contact
  let phone = req.body.phone
  let email = req.body.email
  let user_id = req.body.user_id
  if (!company) {
    return res.status(422).send({ error: "Company must be filled out." })
  } else if (!contact) {
    return res.status(422).send({ error: "Contact must be filled out." })
  } else if (!phone) {
    return res.status(422).send({ error: "Phone must be filled out." })
  } else if (!email) {
    return res.status(422).send({ error: "Email must be filled out." })
  } else if (!user_id) {
    return res.status(422).send({ error: "User_id must be filled out." })
  }  
  Designer.new(company, contact, phone, email, user_id)
    .then((designer) => {
      res.status(201).json(designer)
    })
}

function update(req, res, next) {
  let id = req.body.designerId
  let company = req.body.company
  let contact = req.body.contact
  let phone = req.body.phone
  let email = req.body.email
  if (!company || !contact || !phone || !email) {
    return res.status(400).send({ error: "All fields are required." })
  } else {
    Designer.edit(id, company, contact, phone, email)
      .then(designer => {
        if (!designer) {
          res.sendStatus(400)
        } else {
          Designer.find(id) 
            .then(editedDesigner => {
              res.json(editedDesigner)
            })
        }
      })
  }
}

module.exports = {index, create, show, update}