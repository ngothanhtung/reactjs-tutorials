var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

/* GET home page. */
router.post('/check-out', function (req, res, next) {
  const data = { customner, orderDetails, orderTotal } = req.body;
  db.insertDocument(data, 'orders').then(result => {
    res.json(result);
  });
});

module.exports = router;
