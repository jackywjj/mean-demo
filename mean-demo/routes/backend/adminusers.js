var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(['/', '/list'], function (req, res, next) {
	res.render('backend/adminuser/list');
});

router.get('/create', function(req, res, next){

});

router.get('/update', function(req, res, next){

});

module.exports = router;
