require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 5173;
app.use(express.static('.'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(routes);

db.once('open', () =>
	app.listen(PORT, function () {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	})
);
