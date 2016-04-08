var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Elana\'s Auth Practice',
    user: req.user
  });
});

module.exports = router;
