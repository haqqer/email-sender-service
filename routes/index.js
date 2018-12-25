const router = require('express').Router();
const { home, email } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);
router.post('/', email.sendOne);

module.exports = router;
