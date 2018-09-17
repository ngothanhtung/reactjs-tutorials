var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.findDocuments({}, 'categories').then(result => {
    res.json(result);
  })
});

module.exports = router;
