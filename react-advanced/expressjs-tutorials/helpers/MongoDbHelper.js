// Khai báo thư viện MongoClient
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Chuỗi kết nối đến MongoDB
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017';
const CONNECTION_STRING = 'mongodb://aptech:Aptech2018@ds259001.mlab.com:59001/onlineshop';
const DATABASE_NAME = 'onlineshop';

function MongoDbHelper() {
}

// INSERT: Thêm mới
MongoDbHelper.insertDocument = function (jsonData, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.insertOne(jsonData, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(jsonData);
                }
            });
        }
    });
};

// INSERT: Thêm mới (nhiều)
MongoDbHelper.insertDocuments = function (jsonData, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.insertOne(jsonData, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(jsonData);
                }
            });
        }
    });
};

// UPDATE: Sửa
MongoDbHelper.updateDocument = function (id, jsonData, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.updateOne({ _id: ObjectID(id) }, { $set: jsonData }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// REMOVE: Xoá
MongoDbHelper.removeDocument = function (id, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.removeOne({ _id: ObjectID(id) }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// FIND: Tìm kiếm (nhiều)
MongoDbHelper.findDocuments = function (jsonData, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.find(jsonData).toArray(function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// FIND: Tìm kiếm (id)
MongoDbHelper.findDocument = function (id, collectionName, callback) {
    MongoClient.connect(CONNECTION_STRING, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var dbo = db.db(DATABASE_NAME);
            var collection = dbo.collection(collectionName);
            collection.findOne({ _id: ObjectID(id) }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

module.exports = MongoDbHelper;

