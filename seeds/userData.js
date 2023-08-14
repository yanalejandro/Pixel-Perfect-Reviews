const { User } = require('../models');

const userdata = [
    {
        username: 'anon',
        password: 'anonymous',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
