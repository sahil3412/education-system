const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.use(authenticate);
// Additional user routes for enrollment management can be defined here

module.exports = router;
