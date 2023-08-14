const { Model, DataTypes } = require('sequelize');

// for encrypting the password
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    validatePassword(pass) {
        // check if password given matches the user password
        return bcrypt.compareSync(pass, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // password must be at least 8 char long
            validate: {
                len: [8]
            },
        }
    },
    {
        hooks: {
            // password is hashed before it is sent in to table
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
