const router = require('express').Router();
const { Game } = require('../../models');

// add new game when given game info
// if we use the api for games, we can save searched games
// in here to reduce the amount of api calls we have to make
router.post('/', async (req, res) => {
    try {
        // create new review with given review info
        const gameData = await Game.create({
            title: req.body.title,
            image_file: req.session.image_file,
            price: req.body.price
        });
    
        res.status(200).json(gameData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get selected game by given id
router.get('/:id', async (req, res) => {
    try {
    // search database for a game with an id (pk) that matches
    const gameData = await Game.findByPk(req.params.id);

    // to test that data was grabbed, it should log the data we want
    console.log(gameData);

    // '.get({ plain: true })' so that it only has the data we want
    const game = gameData.get({ plain: true });

    // the game is sent to show the handlebars file we have for showing a specific game
    // if we want to show it in a different handlebars file, we'll just change the name in the ''
    res.render('game', game);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;