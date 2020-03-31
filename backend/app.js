const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const categoriesRoutes = require('./routes/categories-routes');
const offersRoutes = require('./routes/offers-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json()); // Needs to be called before the route. Will take form data and parse to router as json.

app.use('/api/places', placesRoutes); // => /api/places/...
app.use('/api/categories', categoriesRoutes); // => /api/categories/...
app.use('/api/offers', offersRoutes); // => /api/offers/...
app.use('/api/users', usersRoutes); // => /api/users/...

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || 'An unknown error occurd.' });
});

app.listen(5000);
