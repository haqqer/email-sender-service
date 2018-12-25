const router = require('express').Router();
const test = require('../controllers/test')

/* GET home page. */
router.get('/', test.hello);

module.exports = router;
