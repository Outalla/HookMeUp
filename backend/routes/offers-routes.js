const express = require('express');

const offersControllers = require('../controllers/offers-controllers');

const router = express.Router();

router.get('/:oid', offersControllers.getOfferById);

router.get('/user/:uid', offersControllers.getOffersByUserId);

router.get('/category/:cid', offersControllers.getOffersByCategoryId);

router.get('/place/:pid', offersControllers.getOffersByPlaceId);

module.exports = router;
