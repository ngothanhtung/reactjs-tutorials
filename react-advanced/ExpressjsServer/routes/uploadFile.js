var express = require('express');
var router = express.Router();
var fs = require('fs');

// ---------------------------------------------------------------------------------------------------------------
// MULTER UPLOAD
var multer = require('multer');
// ---------------------------------------------------------------------------------------------------------------
var storage = multer.diskStorage({
  contentType: multer.AUTO_CONTENT_TYPE,
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
});

var upload = multer({ storage: storage }).single('photo');

router.post('/', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      var bitmap = fs.readFileSync(req.file.path);
      const base64String = new Buffer(bitmap).toString('base64');
      res.send(base64String);
    }
  });
});


router.post('/get-file', function (req, res, next) {
  var base64String = req.body.base64String
  var bitmap = new Buffer(base64String, 'base64');
  // write buffer to file
  fs.writeFileSync('./public/uploads/base64.jpg', bitmap);
  res.send('http://localhost:9000/uploads/base64.jpg');
});


module.exports = router;