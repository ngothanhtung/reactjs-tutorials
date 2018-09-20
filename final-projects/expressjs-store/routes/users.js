var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.findDocuments({}, 'users').then(result => {
    res.json(result);
  })
});

router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  db.findDocuments({ email: email, password: password }, 'users').then(result => {
    res.json(result);
  })
});

module.exports = router;
