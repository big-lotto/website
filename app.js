const config = require('./config');
const keys = require('./config/keys');

const boxen = require('boxen');

const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const sessionRoutes = require('./routes/session-routes');
const passportSetup = require('./config/passport-setup');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

app.use('/', express.static('public/webapp'));

app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000, // day
	keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/session', sessionRoutes);
app.use('/auth', authRoutes);


// connect to mongodb 
mongoose.connect(
	keys.mongodb.dbURI, { 
		useNewUrlParser: true 
	}, 
	(err) => {

		function getKeysMessage(keys){
			let message = 
			`MONGODB: ${keys.mongodb.dbURI}\n`
			return message;
		}

		if(err){
			console.log(err);
			return;
		}
		if(process.env.NODE_ENV === "development"){
			const message = getKeysMessage(keys);
			console.log(boxen(message, {padding: 1}));
		}
	});

app.listen(config.port, () => {
	let startUpMessage = `App running on ${config.host}:${config.port}`;
	console.log(boxen(startUpMessage, {padding: 1, borderStyle: 'round'}, ));
});

