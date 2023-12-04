const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController.js')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router