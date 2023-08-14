const User = require('./user');
const Review = require('./Review');
const Game = require('./Game');
const Comment = require('./Comment');


// Each user can have many reviews:
User.hasMany(Review, {
    foreignKey: 'user_id'
});
Review.belongsTo(User, {
    foreignKey: 'user_id'
});


// Each Game can have many reviews:
Game.hasMany(Review, {
    foreignKey: 'game_id'
});
Review.belongsTo(Game, {
    foreignKey: 'game_id'
});

// Each Review has many Comments:
Review.hasMany(Comment, {
    foreignKey: 'review_id'
});
Comment.belongsTo(Review, {
    foreignKey: 'review_id'
});


// Each User has many Comments:
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
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