var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  res.json({ email: email, password: password, id: 1 });
});

module.exports = router;
