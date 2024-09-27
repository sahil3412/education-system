const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

router.post('/signup', authController.signup); // Check that 'signup' is defined
router.post('/login', authController.login);   // Check that 'login' is defined

module.exports = router;
