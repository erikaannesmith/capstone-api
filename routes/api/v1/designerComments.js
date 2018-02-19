const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const designerCommentsController = require('../../../controllers/designerCommentsController')

router.get('/', designerCommentsController.index)

module.exports = router;