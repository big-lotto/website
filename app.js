const config = require('./config');
const keys = require('./config/keys');

const boxen = require('boxen');

const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');


app.use(cookieSession({
	maxAge: 24 * 60 * 60* 1000, // day
	keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


// create home route
app.get('/', (req, res) => {
	res.render('home', {
		user: req.user
	});
});


// connect to mongodb 
mongoose.connect(
	keys.mongodb.dbURI, { 
		useNewUrlParser: true 
	}, 
	(err) => {
		if(err){
			console.log(err);
			return;
		}

	});

app.listen(config.port, () => {
	let startUpMessage = `App running on ${config.host}:${config.port}`;
	console.log(boxen(startUpMessage, {padding: 1, borderStyle: 'round'}, ));
});

