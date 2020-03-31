const express = require('express');

const categoriesControllers = require('../controllers/categories-controllers');

const router = express.Router();

router.get('/:cid', categoriesControllers.getCategoryById);

module.exports = router;
