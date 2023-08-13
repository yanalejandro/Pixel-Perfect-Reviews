const router = require('express').Router();
const { User, Game, Review } = require('../models');
// const Authenticate = require('../utils/authenticate');

// sends game data to dashboard
// if we want to only put the most reviewed games, we may need to edit this to only
// grab those games
// for now it sends all games
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll();

        // clean up data
        const games = gameData.map((game) => game.get({plain: true}));

        // sends all games and if user is logged in or not to dashboard
        // the loggedIn is just so we can either have login or logout showing depending
        res.render('dashboard', {
            games,
            loggedIn: req.session.loggedIn
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
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