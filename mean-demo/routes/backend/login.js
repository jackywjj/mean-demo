var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('backend/login');
});

router.post('/', function (req, res, next) {
    res.redirect('/backend/adminusers')
});

module.exports = router;
