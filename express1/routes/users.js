var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/first', function(req, res, next) {
  res.json({name:'lili',pwd:'不告诉你'});
});

router.post('/cc', function(req, res) {
  res.send('POST request to homepage')
});

module.exports = router;
