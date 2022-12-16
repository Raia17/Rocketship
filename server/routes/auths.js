const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')

router.post('/signin', AuthController.signIn);
router.post('/oauth', AuthController.oAuth);
router.post('/signout', AuthController.signOut);

module.exports = router;