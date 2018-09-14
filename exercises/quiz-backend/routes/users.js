var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  var result = {
    id: 1,
    email: email,
    fullName: 'Ngô Thanh Tùng',
    avatarUrl: 'https://edusynch.s3.amazonaws.com/uploads/student/avatar/102514/thumb_23172429_10156831208144676_2528946045023983681_n.jpg',
    roles: [1, 5, 7, 9]
  };
  // res.json(result);
  setTimeout((() => { res.json(result) }), 0);
});

module.exports = router;
