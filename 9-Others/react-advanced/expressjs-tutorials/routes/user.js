var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

router.get('/get/:email', function (req, res) {
  var email = req.params.email;
  //console.log(req.params);
  db.findDocuments({ email: email }, "users", function (result) {
    res.json({
      success: true,
      message: "OK",
      result: result
    });
  })
});
router.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  db.findDocuments({ email: email, password: password }, "users", function (result) {
    res.json({
      success: true,
      message: "OK",
      result: result
    });
  });
});
router.post('/register', function (req, res) {
  var data = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
  }

  db.insertDocument(data, "users", function (result) {
    res.json({
      success: true,
      message: "OK",
      result: result
    });
  });
});
router.post('/forgotten-password', function (req, res) {
  var email = req.body.email;
  // FIND USER
  db.findDocuments({ email: email }, "users", function (result) {
    if (result.length > 0) {
      // FOUND USER
      // SEND EMAIL
      var subject = 'Recovery your password';
      var html = `<html>`;
      html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
      html += `<body class='container' style='margin-top: 48px'>`;
      html += `<h1 class='text-center'>Click here to reset your password: http://localhost:9000/user/reset-password/${result[0]._id}</h1>`;
      html += `</body>`;

      sendMail(result[0].email, subject, html);
      res.status(200).json({
        success: true,
        message: "OK",
        result: result
      });
    }
    else {
      res.json({
        success: false,
        message: "Cannot found email",
        result: result
      });
    }
  });
});
router.get('/reset-password/:id', function (req, res) {
  var id = req.params.id;
  // FIND USER
  db.findDocument(id, "users", function (result) {
    console.log(result);
    if (result) {
      // FOUND USER
      // UPDATE NEW PASSWORD
      var newPassword = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
      db.updateDocument(id, { password: newPassword }, 'users', function (result) {
        var html = `<html>`;
        html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
        html += `<body class='container' style='margin-top: 48px'>`;
        html += `<h1 class='text-center'>Your new password is: ${newPassword}</h1>`;
        html += `</body>`;
        html += `</html>`;
        res.send(html);
      });
    }
    else {
      // NOT FOUND USER
      var html = `<html>`;
      html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
      html += `<body class='container' style='margin-top: 48px'>`;
      html += `<h1 class='text-center'>Cannot find user id</h1>`;
      html += `</body>`;
      html += `</html>`;
      res.send(html);
    }
  });
});

function sendMail(toEmail, subject, body) {
  const nodemailer = require('nodemailer');
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'aptech.reactnative@gmail.com', // generated ethereal user
        pass: 'abc@123!!'  // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"APTECH - REACT NATIVE TUTORIALS" <aptech.reactnative@gmail.com>', // sender address
      to: toEmail, // list of receivers
      subject: subject, // Subject line      
      html: body // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  });
}

module.exports = router;