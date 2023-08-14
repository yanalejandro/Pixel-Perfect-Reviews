const { User } = require('../models');

const userdata = [
    {
        username: 'anon',
        email: 'anon@mail.com',
        password: 'anonymous',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
