const {sequelizeCon} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelizeCon.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test

        await Restaurant.create(seedRestaurant[0])
        const foundRestaurant = await Restaurant.findAll()

        expect(foundRestaurant.length).toEqual(1)
    });

    test('can create a Menu', async () => {
        // TODO - write test

        await Menu.create(seedMenu[0])
        const foundMenu = await Menu.findAll()

        expect(foundMenu.length).toEqual(1)
    });

    test('can find Restaurants', async () => {
        // TODO - write test

        await Restaurant.create(seedRestaurant[1])
        const foundById = await Restaurant.findByPk(2)

        //Here we find the Restaurant Object which has name LittleSheep
        expect(foundById.dataValues.name).toEqual("LittleSheep")
    });

    test('can find Menus', async () => {
        // TODO - write test

        await Menu.create(seedMenu[1])
        const foundById = await Menu.findByPk(2)

        //Here we find the Menu Object which has title Lunch
        expect(foundById.dataValues.title).toEqual("Lunch")
    });

    test('association with Restaurant & Menu', async () => {
        // TODO - write test

        const testing = await Restaurant.findByPk(1)
        await testing.addMenus(1)
        const getResults = await testing.getMenus()
        
        // "Breakfast" from Menu is now associated with "AppleBees"
        // from Restaurant
        expect(getResults[0].dataValues.title).toEqual("Breakfast")
    });

    test('Association with Menu & Items', async () => {
        
        await Item.bulkCreate([{ name: "Steak", image: "Steak", price: 18.50,
        vegetarian: false },
        { name: "Bean Tacos", image: "Tacos", price: 11.25,
        vegetarian: true }])

        await Menu.create(seedMenu[2])
        const menuTesting = await Menu.findByPk(3) //dinner

        await menuTesting.addItems(1)
        await menuTesting.addItems(2)

        const getItems = await menuTesting.getItems()
    
        expect(getItems[0].dataValues.name).toEqual("Steak")
        expect(getItems[1].dataValues.name).toEqual("Bean Tacos")

    })

    test('can delete Restaurants', async () => {
        // TODO - write test
        const newRestaurant = await Restaurant.create(seedRestaurant[2])
        
        await newRestaurant.destroy()

        const foundRestaurant = await Restaurant.findAll()
        
        expect(foundRestaurant.length).toEqual(2)
    });
})