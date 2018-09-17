var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();


router.get('/', function (req, res, next) {
  db.findDocuments({}, 'products').then(result => {
    res.json(result);
  })
});


module.exports = router;
