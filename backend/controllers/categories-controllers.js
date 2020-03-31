const HttpError = require('../models/http-error');

const DUMMY_CATEGORIES = [
	{
		id: 'c1',
		name: 'Painter',
		desc: 'Painter'
	}
];

const getCategoryById = (req, res, next) => {
	const categoryId = req.params.cid;
	const category = DUMMY_CATEGORIES.find(c => {
		return c.id === categoryId;
	});

	if (!category) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ category });
};

exports.getCategoryById = getCategoryById;
