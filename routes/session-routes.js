const router = require('express').Router();

router.get('/', (req, res) => {

	var body = {
    	authenticated: req.user ? true : false,
	}

	if(req.user){
		body.user = {
    		name: req.user.displayName ,
    		picture: req.user.thumbnail || ""
    	}	
	} 

    res.json(body);
});

module.exports = router;
