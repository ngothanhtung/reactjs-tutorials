var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var result = [];
  result.push({ id: 1, questionText: 'cat', options: [{ id: 1, text: 'A. meo', correct: true }, { id: 2, text: 'B. cho' }] });
  result.push({ id: 2, questionText: 'dog', options: [{ id: 1, text: 'A. meo' }, { id: 2, text: 'B. cho', correct: true }] });
  // res.json(result);
  setTimeout((() => { res.json(result) }), 2000);
});

module.exports = router;
