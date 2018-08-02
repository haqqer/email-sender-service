var express = require('express');
var router = express.Router();
const agenda = require('../lib/agenda');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send/fls-registration', function(req, res, next) {
  agenda.now('fls registration', {
    email: req.body.email,
    fullname: req.body.fullname,
    roomFirst: req.body.roomFirst,
    nickname: req.body.nickname,
  });
  res.status(201).send({sending: true});
})

module.exports = router;
