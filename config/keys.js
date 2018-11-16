const boxen = require('boxen');
const util = require('../util');

// default keys
let keys = {
	google: {
		clientID: '',
		clientSecret: ''
	},
	mongodb: {
		dbURI: 'mongodb://user:pass@host:27017/db'
	},
	session: {
		cookieKey: 'random'
	}
};

if(util.isCloudFoundry()){
	const cfenv = require('cfenv').getAppEnv();
	const env = process.env;
	keys = { 
		google: {
			clientID: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET
		},
		mongodb: {
			dbURI: cfenv.getServiceURL(process.env.MONGO_SERVICE_NAME)
		},
		session: {
			cookieKey: env.SESSION_COOKIE_KEY
		}
	};
} else {
	// this file is specified .gitignore - create manually according to the default keys
	keys = require('./sample-keys'); 
}


function getKeysMessage(keys){
	let message = 
	`MONGODB: ${keys.mongodb.dbURI}\n`
	return message;
}

if(process.env.NODE_ENV === "development"){
	const message = getKeysMessage(keys);
	console.log(boxen(message, {padding: 1}));
}

module.exports = keys; 