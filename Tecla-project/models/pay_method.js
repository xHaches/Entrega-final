const {DataTypes} = require('sequelize');

const sequelize = require('../database/connection');

const Pay_Method = sequelize.define('Pay_Method', {
    id:{ 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    description_: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },
},
{
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
} );


module.exports = Pay_Method;