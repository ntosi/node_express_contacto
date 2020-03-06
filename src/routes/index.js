const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Node Express | nodemon' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});

module.exports = router;
