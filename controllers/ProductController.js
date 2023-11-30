const Product = require('../models/Product')

module.exports = class ProductController {
    static showProducts(req,res) {
        res.render('products/all')
    }
    static createProduct(req,res) {
        res.render('products/create')
    }
    static async createProductPost (req,res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        const product = new Product (name, price, description)

        product.save()

        console.log(`O produto: ${name} foi criado preço de ${price} com a descriçao: ${description}`)

        res.render('products/all')
    }
}