const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Menu.belongsToMany(Item, {through: "menu_items"})
Item.belongsToMany(Menu, {through: "menu_items"})

module.exports = { Restaurant, Menu, Item }
