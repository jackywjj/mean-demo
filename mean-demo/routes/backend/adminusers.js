var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.render('backend/adminuser');
});

router.get('/list', function (req, res, next) {

});

router.get('/create', function(req, res, next){

});

router.get('/update', function(req, res, next){

});

module.exports = router;
