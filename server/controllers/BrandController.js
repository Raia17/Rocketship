const Brand = require('../models/Brand')

const index = async (req, res, next) => {
    const { data, error } = await Brand.getBrands();
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

    const { data, error } = await Brand.getBrand(req.params.id)
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

    const brand = new Brand({
        name: req.body.name,
        slug: req.body.slug,
    })

    const { error } = await brand.addBrand();
    if (error) {
        res.status(400).json({
            error
        })
    }

    res.status(200).json({
        message: 'Brand added successfully'
    })
}

const update = async (req, res, next) => {

    const brand = new Brand({
        name: req.body.name,
        slug: req.body.slug,
    })

    const { data, error } = await brand.updateBrand(req.params.id);
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        message: 'Brand edited successfully'
    })
}

const remove = async (req, res, next) => {

    const { error } = await Brand.removeBrand(req.params.id);
    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        message: 'Brand deleted successfully'

    })
}


module.exports = { index, get, add, update, remove };