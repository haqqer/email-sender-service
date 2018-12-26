const router = require('express').Router();
const { home, delivery, webhook } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);
router.post('/delivery', delivery.send);

router.post('/webhook/tracking', webhook.tracking);

module.exports = router;
