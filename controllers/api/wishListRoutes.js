const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Game, User } = require('../../models');

// add new favorite game
router.post('/', async (req, res) => {
    try {
        // grab current user
        const currentUser = await User.findByPk(req.session.user_id);
        const user = currentUser.get({ plain: true});

        // grab selected game
        const favGame = await Game.findByPk(req.body.gameId);
        const game = favGame.get({ plain: true});

        // save both in junction table
        // await currentUser.addGame(favGame, { through: user_games });
    
        await sequelize.query(`INSERT INTO user_games (user_id, game_id) VALUES (${user.id}, ${game.id})`)

        res.status(200).json(favGame);
    } 
    catch (err) {
        res.status(500).json(err);
    }
});


// remove favorite game
router.delete('/:id', async (req, res) => {
    try {
        // grab current user
        const currentUser = await User.findByPk(req.session.user_id);

        // grab selected game
        const favGame = await Game.findByPk(req.params.id);

        // remove from junction table
        await currentUser.removeGame(favGame);

        res.status(200).json(favGame);
    } 
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;