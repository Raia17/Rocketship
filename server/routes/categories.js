const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController')
const auth = ''

router.post('/add', CategoryController.add)
router.post('/edit/:id', CategoryController.update)
router.post('/delete/:id', CategoryController.remove)

module.exports = router