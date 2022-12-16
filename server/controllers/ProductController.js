const Product = require('../models/Product')

const index = async (req, res, next) => {
    const { data, error } = await Product.getProducts();
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        data
    })
}

const get = async (req, res, next) => {

    const { data, error } = await Product.getProduct(req.params.id)
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        data
    })
}

const add = async (req, res, next) => {

    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        genre: req.body.genre,
        description: req.body.description,
        slug: req.body.slug,
        image: req.body.image,
        price: req.body.price,
        quantity: req.body.quantity,
    })

    const { error } = await product.addProduct();
    if (error) {
        res.status(400).json({
            error
        })
    }

    res.status(200).json({
        message: 'Product added successfully'
    })
}

const update = async (req, res, next) => {

    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        genre: req.body.genre,
        description: req.body.description,
        slug: req.body.slug,
        image: req.body.image,
        price: req.body.price,
        quantity: req.body.quantity,
    })

    const { data, error } = await product.updateProduct(req.params.id);
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        message: 'Product edited successfully'
    })
}

const remove = async (req, res, next) => {

    const { error } = await Product.removeProduct(req.params.id);
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        message: 'Product deleted successfully'

    })
}


module.exports = { index, get, add, update, remove };