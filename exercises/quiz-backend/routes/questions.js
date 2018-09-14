var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.findDocuments({}, 'questions').then(result => {
    res.json(result);
  });
});


router.post('/', function (req, res, next) {
  db.insertDocument(req.body, 'questions').then((result => {
    res.json(result);
  }));
});

module.exports = router;
