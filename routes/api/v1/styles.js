const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const stylesController = require('../../../controllers/stylesController')

router.get('/', stylesController.index)
router.post('/', stylesController.create)

module.exports = router;