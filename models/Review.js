const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Review extends Model {
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_posted: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        funny: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        helpful: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hours_played: {
            type: DataTypes.INTEGER,
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
