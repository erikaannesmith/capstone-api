const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const styleCommentsController = require('../../../controllers/styleCommentsController')

router.get('/', styleCommentsController.index)

module.exports = router;