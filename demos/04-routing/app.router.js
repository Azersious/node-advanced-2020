const express = require('express')
const router = express.Router();
const pageController = require('./controllers/page')


router.get('/',pageController.index);
router.get('/about',pageController.about);

module.exports = router;