const { User } = require('../models');

const userdata = [
    {
        username: 'Test',
        password: 'testtest',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
