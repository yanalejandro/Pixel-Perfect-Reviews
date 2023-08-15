const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // since the image itself can't be saved in a table,
        // we can save the file name and access it from our images folder
        image_file: {
            type: DataTypes.STRING
        },
        summary: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.DECIMAL
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;
