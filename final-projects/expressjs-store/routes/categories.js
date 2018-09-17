var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();
var ObjectID = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.findDocuments({}, 'categories').then(result => {
    res.json(result);
  })
});

router.get('/:id/products', function (req, res) {
  const id = req.params.id;

  db.findDocuments({ categoryId: ObjectID(id) }, 'products').then(result => {
    res.json(result);
  })
});

module.exports = router;
