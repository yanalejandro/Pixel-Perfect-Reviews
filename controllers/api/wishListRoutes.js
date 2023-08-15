const router = require('express').Router();
const { Game, User } = require('../../models');

// add new favorite game
router.post('/', async (req, res) => {
    try {
        // grab current user
        const currentUser = await User.findByPk(req.session.user_id);

        // grab selected game
        const favGame = await Game.findByPk(req.body.gameId);

        // save both in junction table
        await currentUser.addGame(favGame, { through: User_Games });
    
        res.status(200).json(favGame);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});