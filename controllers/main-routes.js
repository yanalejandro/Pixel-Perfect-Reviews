const router = require('express').Router();
const { User, Game, Review, Comment } = require('../models');
const Authenticate = require('../utils/authenticate');
const sequelize = require('../../config/connection');

// sends game data to dashboard
// if we want to only put the most reviewed games, we may need to edit this to only
// grab those games
// for now it sends all games
// NOTE: we currently have no games, so this wont do anything yet
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

// user profile page
// access user profile when they are logged in
// Authenticate is function that sends them to login page if not logged in
router.get('/profile', Authenticate, async (req, res) => {
    // show only posts and comments from user
    try {
        const userReviewData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Review,
                    as: "favorite_reviews"
                }
            ]
        });
        userReviews = userReviewData.get({ plain: true });
        
        res.render('profile', {
            userReviews,
            loggedIn: req.session.loggedIn,
        });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get user wish list data
router.get('/profile/wish_list', Authenticate, async (req, res) => {
    try {
        // get fav games for user
        const userGameData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Game,
                    as: "favorite_games"
                }
            ]
        });
        userGames = userGameData.get({ plain: true });

        res.render('wish_list', {
            userGames,
            loggedIn: req.session.loggedIn,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get user's reviews
route.get('/profile/my_reviews', Authenticate, async (req, res) => {
    try {
        const reviewData = await Review.findAll(
            {
                // only get reviews for current user
                where: { user_id: req.session.user_id } 
            },
            {
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password']}
                }
            ]
        });
        // get each post from the data
        const reviews = reviewData.map((review) =>
            review.get({ plain: true })
        );

        res.render('my_reviews', {
            reviews,
            loggedIn: req.session.loggedIn,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// search for game in db by title
router.get('games/search/:search', async (req, res) => {
    try {
        const search = req.params.search.toLowerCase();

        // should get all games that contain the search term in their title
        const searchData = await sequelize.literal(`(SELECT * FROM games where lower(title) LIKE '%${search}%')`);

        // if the above gives us problems, we'll try the below...
        // const searchData = await Game.findAll(
        //     {
        //         where: { title: {
        //             [Op.substring]: `${search}`
        //         } }
        //     }
        // ); 

        const games = searchData.map((game) => 
            game.get({ plain: true })
        );

        // send games to search results handlebar
        res.render('searchresults', {
            games,
            loggedIn: req.session.loggedIn,
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// search games api for games and show results
// this is so user can select new game to review (if not already in db)
router.get('newgames/search/:search', async (req, res) => {
    try {
        const search = req.params.search.toLowerCase();

        // search game api for given value
        const newResponse = await fetch(`https://api.igdb.com/v4/games`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'pr4r1gm8l2x1xvmfz4tr9ag5qdkf8c',
                'Authorization': 'Bearer tedb7dkatie4n0yz7renxmuvja7rm9',
                'Content-Type': 'text/plain'
            },
            body: `search "${search}"; fields name, summary, cover, total_rating;`
        });

        if (newResponse.ok) {
            const searchResults = await newResponse.json();

            res.render('newgames', {
                searchResults,
                loggedIn: req.session.loggedIn,
            });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// get selected game by given id
// NOTE: we currently have no games, so this wont do anything yet
router.get('games/:id', async (req, res) => {
    try {
    // search database for a game with an id (pk) that matches
    // get the reviews for the game and the users that made them
    const gameData = await Game.findByPk(req.params.id, {
        include: [
            {
                model: Review,
                attributes: [
                    'date_posted',
                    'funny',
                    'helpful',
                    'hour_played',
                    'recommendation',
                    'review',
                    'user_id'
                ],
                // get user for review
                include: [
                    {
                        model: User,
                        attributes: [
                            'username'
                        ]
                    }
                ]
            }
        ]
    });

    // to test that data was grabbed, it should log the data we want
    console.log(gameData);

    // '.get({ plain: true })' so that it only has the data we want
    const game = gameData.get({ plain: true });

    // the game is sent to show the handlebars file we have for showing a specific game
    // if we want to show it in a different handlebars file, we'll just change the name in the ''
    res.render('game', {
        game,
        loggedIn: req.session.loggedIn
    });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// get selected review by given id
router.get('reviews/:id', async (req, res) => {
    try {
    // search database for a review with an id (pk) that matches
    // include the name of the user that created it
    // and the game it is about
    const reviewData = await Review.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: [
                    'username'
                ],
            },
            {
                model: Game,
                attributes: [
                    'title',
                    'image_file'
                ]
            },
            {
                model: Comment,
                attributes: [
                    'comment_text',
                    'user_id'
                ],
                // get user for comment
                include: [
                    {
                        model: User,
                        attributes: [
                            'username'
                        ]
                    }
                ]
            }
        ]
    });

    // to test that data was grabbed, it should log the data we want
    console.log(reviewData);

    // '.get({ plain: true })' so that it only has the data we want
    const review = reviewData.get({ plain: true });

    // the review is sent to show the handlebars file we have for showing a specific review
    // if we want to show it in a different handlebars file, we'll just change the name in the ''
    res.render('review', { 
        review,
        loggedIn: req.session.loggedIn
    });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// take user to create a new review page, but only if they are logged in
// Authenticate is function that sends them to login page if not logged in
router.get('/newreview', Authenticate, (req, res) => {
    res.render('newreview');
});

module.exports = router;