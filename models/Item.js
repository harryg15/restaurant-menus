const {sequelizeCon} = require('../db');
const { Sequelize } = require('sequelize');

let Item = sequelizeCon.define("item", {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.INTEGER,
    vegetarian: Sequelize.BOOLEAN
});

module.exports = {Item};