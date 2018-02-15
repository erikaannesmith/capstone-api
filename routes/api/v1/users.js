const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const usersController = require('../../../controllers/usersController')

router.get('/', usersController.index)

module.exports = router;