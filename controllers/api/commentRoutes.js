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
        res.status(500).json(err);
    }
});

// delete a comment
router.delete('/:id', async (req, res) => {
    try {
        // delete comment where the id matches
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        // if there is no comment of that id give an error
        if (!commentData) {
            res.status(404).json({ message: 'No comment with this id!' });
            return;
        }
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;