const sequelize = require('../config/connection');
// Adding in fake posts to test
const seedReview = require('./reviewData');
const seedUser = require('./userData');
const seedGame = require('./gameData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedGame();

    await seedReview();    

    process.exit(0);
};

seedAll();
