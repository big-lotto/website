const util = require('../util');
const appEnv = require('cfenv').getAppEnv();
const boxen = require('boxen');

// default configuration
let config = {
	environment: process.env.NODE_ENV,
	cloudFoundry: false,
	host: 'localhost',
	port: '3000'
};

if(util.isCloudFoundry()){
	config.cloudFoundry = true;
	config.host = appEnv.url;
	config.port = process.env.PORT
}
else {
	config.cloudFoundry = false;
	try{
		require('dotenv').config();
		config.host = process.env.HOST;
		config.port = process.env.PORT;
	}
	catch(err){
		
	}
}

function getConfigMessage(config){
	const { environment, cloudFoundry, host, port } = config;
	let platform = cloudFoundry ? 'Cloud Foundry' : 'Local'
	let message = 
		`PLATFORM: ${platform}\n` +
		`ENVIRONMENT: ${environment}\n` + 
		`HOST: ${host}\n` +
		`PORT: ${port}`;
	return message;
}
const message = getConfigMessage(config);

console.log(boxen(message, {padding: 1}));

module.exports = config