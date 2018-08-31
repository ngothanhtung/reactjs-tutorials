var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');


// // Khai báo thư viện MongoClient
// var MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectID;

// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/';
// const DATABASE_NAME = 'StarterDb';

// router.post('/test', function (req, res) {
//     let jsonData = req.body;
//     MongoClient.connect(CONNECTION_STRING, function (err, db) {
//         if (err) {
//             console.log('MONGODB ERROR', err);
//             res.status(500).json({ message: 'CONNECTION ERROR', error: err });
//         }
//         else {
//             var dbo = db.db(DATABASE_NAME);
//             var collection = dbo.collection('Products');
//             collection.insertOne(jsonData, function (err, result) {
//                 if (err) {
//                     console.log('MONGODB ERROR', err);
//                     res.status(500).json({ message: 'INSERT DATA ERROR', error: err });
//                 }
//                 else {
//                     db.close();
//                 }
//             });
//         }
//     });
//     res.send('OK');
// })


router.get('/', function (req, res) {
    db.findDocuments({}, "products", function (result) {
        res.json({
            success: true,
            message: "OK",
            token: "",
            data: result
        });
    })
});

router.get('/get/:id', function (req, res) {
    db.findDocument(req.params.id, "products", function (result) {
        console.log(result);
        res.json({
            success: true,
            message: "OK",
            token: "",
            data: result
        });
    })
});

router.post('/add/', function (req, res) {
    var data = req.body;
    db.insertDocument(data, "products", function (result) {
        res.json(result);
    })
});


module.exports = router;