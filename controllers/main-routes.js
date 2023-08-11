const router = require('express').Router();
const { User, Game, Review } = require('../models');
// const Authenticate = require('../utils/authenticate');

// temporary route that we can change later
router.get('/', async (req, res) => {
    res.render('dashboard');
});

module.exports = router;