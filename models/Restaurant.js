const {sequelizeCon} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
let Restaurant = sequelizeCon.define("restaurant", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine: Sequelize.STRING

});

module.exports = {Restaurant};