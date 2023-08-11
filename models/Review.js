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
        hour_played: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recommendation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // references User
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        // references game
        game_id: {
            type: DataTypes.INTEGER,
            // we can't add this yet, since we don't have our games
            // allowNull: false,
            // references: {
            //     model: 'games',
            //     key: 'id'
            // }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;
