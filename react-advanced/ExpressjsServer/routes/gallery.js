var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

router.get('/albums', function (req, res) {
  db.findDocuments({}, "albums", function (result) {
    res.json(result);
  })
});

router.post('/albums/add', function (req, res) {
  var data = req.body;
  db.insertDocument(data, "albums", function (result) {
    res.json({ message: 'OK' });
  })
});

router.get('/photos/:albumId', function (req, res) {
  const albumId = req.params.albumId;
  db.findDocuments({ albumId: ObjectID(albumId) }, "photos", function (result) {
    res.json(result);
  })
});

router.get('/photos', function (req, res) {
  db.findDocuments({}, "photos", function (result) {
    res.json(result);
  })
});

module.exports = router;