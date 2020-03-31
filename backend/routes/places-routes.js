const express = require('express');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById); // Do not call!

router.get('/user/:uid', placesControllers.getPlaceByUserId); // Do not call!

router.post('/', placesControllers.createPlace);

module.exports = router;
