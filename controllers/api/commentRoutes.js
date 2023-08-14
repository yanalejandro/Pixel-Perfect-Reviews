const router = require('express').Router();
const { Comment } = require('../../models');

// add new comment when given comment info
router.post('/', async (req, res) => {
    try {
        // create new comment with given comment info
        const commentData = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            review_id: req.body.review_id
        });
    
        res.status(200).json(commentData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;