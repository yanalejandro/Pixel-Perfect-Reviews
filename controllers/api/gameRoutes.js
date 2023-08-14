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

module.exports = router;