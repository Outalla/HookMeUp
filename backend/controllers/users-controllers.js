const HttpError = require('../models/http-error');

const DUMMY_USERS = [
	{
		id: 'u1',
		name: 'Delano',
		surname: 'January',
		company: 'Edge Technology Solutions (Pty) LTD',
		email: 'delano@edge.com.na',
		dop: '9/29/1977',
		dor: '3/30/2020'
	}
];

const getUserById = (req, res, next) => {
	const userId = req.params.uid; // { uid: 'u1' }
	const user = DUMMY_USERS.find(u => {
		return u.id === userId;
	});

	if (!user) {
		return next(
			new HttpError('There is no result matching the provided id.', 404)
		);
	}

	res.json({ user });
};

exports.getUserById = getUserById;
