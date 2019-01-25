const router = require('express').Router();
const { tracking } = require('./controllers')
const delivery = require('./lib/delivery/delivery.controller')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/delivery', delivery.send);
router.post('/webhook/tracking', tracking.handleEvent);

module.exports = router;
