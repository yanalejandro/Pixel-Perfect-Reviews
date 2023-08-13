const router = require('express').Router();
const { Review } = require('../../models');

// add new review when given review info
router.post('/', async (req, res) => {
    try {
        // create new review with given review info
        const reviewData = await Review.create({
            date_posted: req.body.date_posted,
            funny: req.body.funny,
            helpful: req.body.helpful,
            hour_played: req.body.hour_played,
            recommendation: req.body.recommendation,
            review: req.body.review,
            title: req.body.title,
            user_id: req.session.user_id,
            game_id: req.body.game_id
        });
    
        res.status(200).json(reviewData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// add get reviews for selected game (add once we have game_ids added to review data)

module.exports = router;