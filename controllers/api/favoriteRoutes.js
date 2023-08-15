const router = require('express').Router();
const { Review, User } = require('../../models');

// add new favorite
router.post('/', async (req, res) => {
    try {
        // grab current user
        const currentUser = await User.findByPk(req.session.user_id);

        // grab selected review
        const favReview = await Review.findByPk(req.body.reviewId);

        // save both in junction table
        await currentUser.addReview(favReview, { through: User_Favs });
    
        res.status(200).json(commentData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});