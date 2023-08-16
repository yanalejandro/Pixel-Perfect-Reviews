const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User } = require('../../models');

// add new favorite review
router.post('/', async (req, res) => {
    try {
        // grab current user
        const currentUser = await User.findByPk(req.session.user_id);
        const user = currentUser.get({ plain: true});

        // grab selected review
        const favReview = await Review.findByPk(req.body.reviewId);
        const review = favReview.get({ plain: true});

        // save both in junction table
        await sequelize.query(`INSERT INTO user_favs (user_id, review_id) VALUES (${user.id}, ${review.id})`)

        // await currentUser.addReview(favReview, { through: User_Favs });
    
        res.status(200).json(favReview);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// delete favorite review  
router.delete('/:id', async (req, res) => {
    try {
        const favReview = await Review.findByPk(req.params.id);
        await favReview.destroy();
        res.status(200).json(favReview);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;