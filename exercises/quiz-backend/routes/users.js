var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  db.findDocuments({ email: email, password: password }, 'users').then(result => {
    if (result.length > 0) {
      res.json(result[0]);
    }
    else {
      res.json({});
    }
  });
});


router.post('/', function (req, res, next) {
  db.insertDocument(req.body, 'users').then((result => {
    res.json(result);
  }));
});

module.exports = router;
