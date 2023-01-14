const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Drinks' },
    { name: 'Merchandise' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bagels',
      description:
        'Bagel.',
      image: 'bagel.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {croissants,
      name: 'Croissants',
      description:
        'Croissants.',
      image: 'croissants.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Coffee',
      category: categories[0]._id,
      description:
        'Coffee.',
      image: 'coffee.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Jam',
      category: categories[0]._id,
      description:
        'Jam.',
      image: 'jam.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Pancakes',
      category: categories[0]._id,
      description:
        'Pancakes.',
      image: 'pancakes.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Syrup',
      category: categories[0]._id,
      description:
        'Syrup.',
      image: 'syrup.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tea',
      category: categories[0]._id,
      description:
        'Tea.',
      image: 'tea.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bread',
      category: categories[0]._id,
      description:
        'Bread.',
      image: 'bread.jpg',
      price: 9.99,
      quantity: 100
    },

    // Adding products for Drinks
    //Coffee
    {   
      name: 'Blonderoast Coffee',
      category: categories[1]._id,
      description:
        'Blonde roast is coffee that has been roasted for a shorter period of time than medium and dark roast coffee..',
      image: 'blonderoast.png',
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Darkroast Coffee',
      category: categories[1]._id,
      description:
        'Dark roast coffee is a dark brown color and often has an oily surface..',
      image: 'darkroast.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Frenchroast Coffee',
      category: categories[1]._id,
      description:
        'Bread.',
      image: 'French roast coffee beans are roast level roasted for longer than typical dark roasts.',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Lightroast Coffee',
      category: categories[1]._id,
      description:
        'Light Roast coffees are characterized by their light brown color, lack of oil on the beans, and light body.',
      image: 'lightroast.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Mediumroast Coffee',
      category: categories[1]._id,
      description:
        'Medium roasted coffee beans are not as dark and bold as the darker ones, but they do offer more complexity than a lighter roast.',
      image: 'mediumroast.png',
      price: 9.99,
      quantity: 100
    },
    //Tea
    {
      name: 'Black Tea',
      category: categories[1]._id,
      description:
        'Black tea, also translated to red tea in various East Asian languages, is a type of tea that is more oxidized than oolong, yellow, white and green teas.',
      image: 'blacktea.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Blueberrylavender Tea',
      category: categories[1]._id,
      description:
      'A black tea blend of sweet blueberry, floral lavender, rich cocoa, and ginger spiciness.',
      image: 'blueberrylavendertea.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Camomile Tea',
      category: categories[1]._id,
      description:
      'Chamomile tea is made from the chamomile flower and is used to treat a wide range of health issues.',
      image: 'camomiletea.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Green Tea',
      category: categories[1]._id,
      description:
      'Green tea is a type of tea that is made from Camellia sinensis leaves and buds',
      image: 'greentea.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Mint Tea',
      category: categories[1]._id,
      description:
      'Mint tea is a herbal tea made by infusing mint leaves in hot water.',
      image: 'minttea.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Turmeric Ginger Tea',
      category: categories[1]._id,
      description:
      'Turmeric Ginger is made by bringing water to a boil, adding turmeric, ginger, and cinnamon',
      image: 'turmericgingertea.png',
      price: 9.99,
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});