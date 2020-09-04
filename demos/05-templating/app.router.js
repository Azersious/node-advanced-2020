const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('pages/index',{
    title : 'My home Page',
    hasNav : true,
    titre : 'Ma super page',
    name : 'Bob'
  })
})

router.get('/about', (req,res) => {
  res.render('pages/about',{
    title : 'About page',
    hasNav : true,
    titre : 'Ma super page about',
  })
})

router.get('/shop', (req,res) => {
  res.render('pages/shop',{
    hasNav : false,
    titre : 'Ma super page shop',
  })
})

module.exports = router