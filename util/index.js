const cfenv = require('cfenv');

module.exports = {
	isCloudFoundry: () => {
		return ! cfenv.getAppEnv().isLocal;
	}
};