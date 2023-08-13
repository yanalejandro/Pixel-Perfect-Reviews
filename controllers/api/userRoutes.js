const router = require('express').Router();
const { User } = require('../../models');

// call to check password from login.js
router.post('/login', async (req, res) => {
    try {
        // Grab user that matches the entered username
        const userData = await User.findOne({ where: { username: req.body.username } });

        // if user data is not found for given username
        if (!userData) {
            res.status(400).json({ message: 'Please enter a valid username' });
            return;
        }

        // call user method to validate the password
        const validPassword = await userData.validatePassword(req.body.password);

        // if password is not valid, send error
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password, please try again' });
        return;
        }

        // save current session for logged in user
        req.session.save(() => {
            req.session.user = userData.id;
            req.session.loggedIn = true;
            
            res.json({ user: userData.username, message: 'You are now logged in!' });
        });

    } 
    catch (err) {
        res.status(400).json(err);
    }
});
