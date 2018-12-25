const router = require('express').Router();
const test = require('../controllers')

/* GET home page. */
router.get('/', test.hello);

module.exports = router;
