var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/abc', function(req, res, next) {
    res.send('respond with abc ');
});
router.get('/', function(req, res, next) {
    res.send('respond with (●"◡"●) ');
});

module.exports = router;