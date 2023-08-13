const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const gameRoutes = require('./gameRoutes');

// send to userRoutes file when /users is in url
router.use('/users', userRoutes);

// send to postRoutes file when /posts is in url
router.use('/reviews', reviewRoutes);

router.use('/games', gameRoutes);

module.exports = router;