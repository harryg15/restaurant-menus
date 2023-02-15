const {sequelizeCon} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Menu model
let Menu = sequelizeCon.define("menu", {
    title: Sequelize.STRING
});

module.exports = {Menu};