const express = require('express');
const router = express.Router();

const GenreController = require('../controllers/GenreController')
const auth = ''

router.post('/add', GenreController.add)
router.post('/edit/:id', GenreController.update)
router.post('/delete/:id', GenreController.remove)

module.exports = router