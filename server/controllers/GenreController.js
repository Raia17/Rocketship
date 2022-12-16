const Genre = require('../models/Genre');

const add = async (req, res, next) => {

    const genre = new Genre(req.body.name);

    const { error } = await genre.addGenre();

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

    const { error } = await Genre.removeGenre(req.params.id);

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

    const genre = new Genre(req.body.name);

    const { error } = await genre.updateGenre(req.params.id);

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