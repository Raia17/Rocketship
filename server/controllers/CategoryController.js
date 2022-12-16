const Category = require('../models/Category');

const add = async (req, res, next) => {

    const category = new Category(req.body.name);

    const { error } = await category.addCategory();

    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        data
    })
}

const remove = async (req, res, next) => {

    const { error } = await Category.removeCategory(req.params.id);

    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        data
    })
}

const update = async (req, res, next) => {

    const category = new Category(req.body.name);

    const { error } = await category.updateCategory(req.params.id);

    if (error) {
        res.status(400).json({
            error
        })
    }
    res.status(200).json({
        data
    })
}

module.exports = { add, update, remove }