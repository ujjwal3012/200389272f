var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/AboutMe', (req, res, next) => {
  res.render('AboutMe', { age:20 });
});

router.get('/Projects', (req, res, next) => {
  res.render('Projects', {});
});

router.get('/Services', (req, res, next) => {
  res.render('Services', {});
});

router.get('/ContactMe', (req, res, next) => {
  res.render('ContactMe', {});
});

module.exports = router;
