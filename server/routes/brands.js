const express = require('express');
const router = express.Router();

const BrandController = require('../controllers/BrandController')
const auth = ''

router.get('/', BrandController.index)
router.post('/get/:id', BrandController.get)
router.post('/add', BrandController.add)
router.post('/edit/:id', BrandController.update)
router.post('/delete/:id', BrandController.remove)

module.exports = router