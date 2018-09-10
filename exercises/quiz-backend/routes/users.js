var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  var result = { id: 1, email: email, fullName: 'Ngô Thanh Tùng', roles: [1, 5, 7, 9] };
  // res.json(result);
  setTimeout((() => { res.json(result) }), 2000);
});

module.exports = router;
