const HttpError = require('../models/http-error');

const DUMMY_OFFERS = [
	{
		id: 'o1',
		name: 'painter',
		desc: 'painter',
		user: 'u1',
		category: 'c1',
		place: 'p1'
	}
];

const getOfferById = (req, res, next) => {
	const offerId = req.params.oid; // { oid: 'o1' }
	const offer = DUMMY_OFFERS.find(o => {
		return o.id === offerId;
	});

	if (!offer) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ offer });
};

const getOffersByUserId = (req, res, next) => {
	const userId = req.params.uid; // { uid: 'u1' }
	const offer = DUMMY_OFFERS.find(o => {
		return o.user === userId;
	});

	if (!offer) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ offer });
};

const getOffersByCategoryId = (req, res, next) => {
	const categoryId = req.params.cid; // { cid: 'c1' }
	const offer = DUMMY_OFFERS.find(o => {
		return o.category === categoryId;
	});

	if (!offer) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ offer });
};

const getOffersByPlaceId = (req, res, next) => {
	const placeId = req.params.pid; // { pid: 'p1' }
	const offer = DUMMY_OFFERS.find(o => {
		return o.place === placeId;
	});

	if (!offer) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ offer });
};

exports.getOfferById = getOfferById;
exports.getOffersByUserId = getOffersByUserId;
exports.getOffersByCategoryId = getOffersByCategoryId;
exports.getOffersByPlaceId = getOffersByPlaceId;
