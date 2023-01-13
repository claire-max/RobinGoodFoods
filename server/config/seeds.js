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
      category: categories[1]._id,
      description:
        'Coffee.',
      image: 'coffee.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Jam',
      category: categories[1]._id,
      description:
        'Jam.',
      image: 'jam.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Pancakes',
      category: categories[1]._id,
      description:
        'Pancakes.',
      image: 'pancakes.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Syrup',
      category: categories[2]._id,
      description:
        'Syrup.',
      image: 'syrup.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tea',
      category: categories[2]._id,
      description:
        'Tea.',
      image: 'tea.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bread',
      category: categories[3]._id,
      description:
        'Bread.',
      image: 'bread.jpg',
      price: 9.99,
      quantity: 100
    }
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
