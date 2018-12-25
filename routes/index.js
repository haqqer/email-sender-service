const router = require('express').Router();
const { home } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);

module.exports = router;
