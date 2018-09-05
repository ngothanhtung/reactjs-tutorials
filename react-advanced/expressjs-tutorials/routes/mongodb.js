var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

// ----------------------------------------------------------------------------
router.get('/products', function (req, res, next) {
  // var options = { limit: 2 };
  // sort: 1: as, -1: desc
  var options = { limit: 10, sort: { price: -1 }, fields: { price: 1, discount: 1 } };
  // filter: >,   >=,   <,   <=,   !=
  // filter: $gt, $gte, $lt, $lte, $ne

  // all
  var all = {};

  // filter: and
  var and = { price: { $gte: 0, $lte: 800 }, discount: { $gte: 50 } };

  // filter: $or
  var or = { $or: [{ price: { $gte: 0, $lte: 800 } }, { discount: 0 }] };

  // var gift = { 'promotion.gift': true }; // method 1
  var gift = { promotion: { gift: true } }; // method 2

  var query = all;

  db.findDocuments(query, 'products').then(result => {
    res.json(result);
  });
});

// ----------------------------------------------------------------------------
router.get('/products/:id', function (req, res, next) {
  const id = req.params.id;
  db.findDocument(id, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----------------------------------------------------------------------------
router.post('/products', function (req, res, next) {
  const data = req.body;
  db.insertDocument(data, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----------------------------------------------------------------------------
router.put('/products/:id', function (req, res, next) {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  db.updateDocument(id, data, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----------------------------------------------------------------------------
router.delete('/products/:id', function (req, res, next) {
  const id = req.params.id;
  console.log(id);
  db.deleteDocument(id, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
router.post('/orders', function (req, res, next) {
  const data = req.body;
  db.insertDocument(data, 'orders')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
