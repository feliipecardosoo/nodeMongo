const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController.js')

router.get('/', ProductController.showProducts)

module.exports = router