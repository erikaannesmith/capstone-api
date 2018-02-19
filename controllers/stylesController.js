var Style = require('../models/styles')

function index(req, res, next) {
  console.log(req)
  let path = req._parsedOriginalUrl.pathname
  let designerId = path.split('/')[4]
  Style.all(designerId)
    .then(styles => {
      res.status(201).json(styles)
    })
}

module.exports = {index}