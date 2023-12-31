const router = require('express').Router();
const { Game } = require('../../models');


// add new game when given game info
// if we use the api for games, we can save searched games
// in here to reduce the amount of api calls we have to make
router.post('/', async (req, res) => {
    try {
        // create new review with given review info
        const gameData = await Game.create({
            id: req.body.id,
            title: req.body.title,
            image_file: req.body.image_file,
            summary: req.body.summary,
            rating: req.body.rating
        });
    
        res.status(200).json(gameData);
    } 
    catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;