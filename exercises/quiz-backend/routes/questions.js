var express = require('express');
var router = express.Router();

const questions = [
  {
    id: 1,
    type: 'one-correct-option',
    questionText: 'cat',
    options: [
      { id: 1, text: 'A. mèo', correct: true },
      { id: 2, text: 'B. chó' },
      { id: 3, text: 'C. chuột' }
    ]
  },
  {
    id: 2,
    type: 'one-correct-option',
    questionText: 'dog',
    options: [
      { id: 1, text: 'A. mèo' },
      { id: 2, text: 'B. chó', correct: true },
      { id: 3, text: 'C. chuột' }
    ]
  },
  {
    id: 3,
    type: 'one-correct-option',
    questionText: 'mouse',
    options: [
      { id: 1, text: 'A. mèo' },
      { id: 2, text: 'B. chó' },
      { id: 3, text: 'C. chuột', correct: true }
    ]
  },
  {
    id: 4,
    type: 'fill-in-the-blank',
    questionText: 'Trong Tiếng Anh, con hổ viết như sau: .........',
    correctText: 'tiger'
  }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.json(questions);
  setTimeout((() => { res.json(questions) }), 1000);
});

module.exports = router;
