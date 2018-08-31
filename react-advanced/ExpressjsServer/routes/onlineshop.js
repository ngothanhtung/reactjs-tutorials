var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

// LIST ALL CATEGORIES
router.get('/categories', function (req, res) {
    db.findDocuments({}, "categories", function (result) {
        res.json(result);
    })
});


router.get('/categories/:id/products', function (req, res) {
    const id = req.params.id;
    db.findDocuments({ categoryId: ObjectID(id) }, "products", function (result) {
        res.json(result);
    })
});


// GET BY ID
router.get('/products/:id', function (req, res) {
    let id = req.params.id;
    db.findDocument(id, "products", function (result) {
        res.json(result);
    })
});

// LIST ALL
router.get('/products', function (req, res) {
    db.findDocuments({}, "products", function (result) {
        res.json(result);
    })
});


// CREATE NEW PRODUCT
router.post('/products/add', function (req, res) {
    var data = req.body;
    db.insertDocument(data, "products", function (result) {
        res.json(result);
    })
});

module.exports = router;