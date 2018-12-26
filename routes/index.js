const router = require('express').Router();
const { home, delivery, tracking } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);

router.post('/delivery', delivery.send);
router.post('/webhook/tracking', tracking.handleEvent);

module.exports = router;
