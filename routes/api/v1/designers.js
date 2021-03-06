const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const designersController = require('../../../controllers/designersController')

router.get('/', designersController.index)
router.post('/', designersController.create)
router.get('/:id', designersController.show)
router.patch('/:id', designersController.update)

module.exports = router;