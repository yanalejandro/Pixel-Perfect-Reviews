const User = require('./user');
const Review = require('./Review');
const Game = require('./Game');



// Each user can have many reviews:
User.hasMany(Review, {
    foreignKey: 'user-id'
});
Review.belongsTo(User, {
    foreignKey: 'user-id'
});


// Each Game can have many reviews:
    Game.hasMany(Review, {
        foreignKey: 'game-id'
    });
    Review.belongsTo(Game, {
        foreignKey: 'game-id'
    });


// Each user can save favorite reviews:
// --- should be many to many and create User_Favs ---
User.belongsToMany(Review, { through: 'User_Favs' });
Review.belongsToMany(User, { through: 'User_Favs' });


// Each user can save games:
// --- should be many to many and create User_Games ---
User.belongsToMany(Game, { through: 'User_Games' });
Game.belongsToMany(User, { through: 'User_Games' });


module.exports = { User, Review, Game};