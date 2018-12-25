var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send/fls-email', function(req, res, next) {
  try {
    if (req.body.secret != process.env.SECRET) {
      res.status(401).send({ message: 'wrong secret' })
    } else if (req.body.emailList) {
      let emailList = JSON.parse(req.body.emailList)
      console.log('bulk email', emailList);

      emailList.forEach(element => {
      });
      res.status(201).send({ sending: true, list: emailList });
    } else {
      res.status(201).send({ sending: true });
    }
  } catch (error) {
    res.status(500).send({ message: 'unexpected error ', data: error })
  }
})

module.exports = router;
