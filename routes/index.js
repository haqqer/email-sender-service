const router = require('express').Router();
const { home, email, webhook } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);
router.post('/delivery', email.send);

router.post('/webhook/tracking', webhook.tracking);

module.exports = router;
