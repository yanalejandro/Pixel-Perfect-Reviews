// function to be used in routes to check if user is logged in
const Authenticate = (req, res, next) => {
    // check if user is currenly logged in
    if (!req.session.loggedIn) {
        // if not, send them to login page
        res.redirect('/login');
    } 
    else {
        next();
    }
};

module.exports = Authenticate;