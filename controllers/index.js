const router = require('express').Router();

// goes to routes for main pages
const mainRoutes = require('./main-routes.js');

// routes for api calls
const apiRoutes = require('./api');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;