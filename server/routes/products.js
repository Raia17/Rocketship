const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')
const auth = ''

router.get('/', ProductController.index)
router.post('/get/:id', ProductController.get)
router.post('/add', ProductController.add)
router.post('/edit/:id', ProductController.update)
router.post('/delete/:id', ProductController.remove)

module.exports = router