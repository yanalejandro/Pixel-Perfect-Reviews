const sequelize = require('../config/connection');
// Adding in fake posts to test
const seedReview = require('./reviewData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedReview();

    process.exit(0);
};

seedAll();
