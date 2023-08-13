const router = require('express').Router();
const { User, Game, Review } = require('../models');
// const Authenticate = require('../utils/authenticate');

// temporary route that we can change later
router.get('/', async (req, res) => {
    res.render('dashboard');
});

// when user goes to login page
router.get('/login', (req, res) => {
    // if user is logged in, take them to their profile
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }

    // if they're not logged in, then they go to the login page
    res.render('login');
});

// when user, doesn't have an account and wants to sign up
router.get('/signup', (req, res) => {
    // if user is logged in, take them to their profile
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }

    // currently sign up is a separate page in routes
    // but if we want to have login and sign up together, we'll have
    // to change this
    res.render('signup');
});

module.exports = router;