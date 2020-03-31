const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world!',
		location: {
			lat: 40.7484474,
			lng: -73.9871516
		},
		address: '20 W 34th St, New York, NY 10001',
		creator: 'u1'
	}
];

const getPlaceById = (req, res, next) => {
	const placeId = req.params.pid; // { pid: 'p1' }
	const place = DUMMY_PLACES.find(p => {
		return p.id === placeId;
	});

	if (!place) {
		// 1st
		// return res
		// 	.status(404)
		// 	.json({ message: 'There is no result matching the provided id.' });

		// 2nd
		// const error = new Error('There is no result matching the provided id.');
		// error.code = 404;
		// return next(error);

		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ place }); // { place } => { place: place }
};

const getPlaceByUserId = (req, res, next) => {
	const userId = req.params.uid; // { uid: 'u1' }
	const place = DUMMY_PLACES.find(p => {
		return p.creator === userId;
	});

	if (!place) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ place });
};

const createPlace = (req, res, next) => {
	const { country, city, region, zip } = req.body;

	const createdPlace = {
		id: uuidv4(),
		country,
		city,
		region,
		zip
	};

	DUMMY_PLACES.push(createdPlace); // push() || unshift()

	res.status(201).json({ place: createdPlace });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
