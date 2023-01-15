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

    //Adding content for Food

    //Bagels
    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Remix your morning with our organic blueberry bagels',
      image: 'Blueberry.png',
      price: 30.00,
      quantity: 10
    },
    {
      name: 'Classic',
      category: categories[1]._id,
      description:
      'Start your morning right with our classic organic bagel that will make your breakfast epic!',
      image: 'Classic.png',
      price: 30.00,
      quantity: 10
    },

    //Bread
    {
      name: 'Wheat',
      category: categories[1]._id,
      description:
      '100% Whole Wheat bread is baked with a rich taste you’ll love. Our bread is free from artificial preservatives, colors and flavors with No Added Nonsense..',
      image: 'Wheat.png',
      price: 28.66,
      quantity: 20
    },

    {
      name: 'White',
      category: categories[1]._id,
      description:
      'With the classic white bread taste the whole family loves and 8 grams of whole grains per serving, Healthy Habits White made with Whole Grain bread means you don’t have to choose between the delicious taste you want and the whole grains you need.',
      image: 'White.png',
      price: 9.99,
      quantity: 100
    },

    //Croissants

    {
      name: 'Almond',
      category: categories[1]._id,
      description:
      'Soft & flaky. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'almond.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Savory and Sweet. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'blueberry.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Chocolate',
      category: categories[1]._id,
      description:
      'A whole lot of chocolate plus the savory. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'chocolate.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Original',
      category: categories[1]._id,
      description:
      'Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'original.png',
      price: 36.00,
      quantity: 10
    },

    //Jam
    {
      name: 'Blackberry',
      category: categories[1]._id,
      description:
      'Bursting with fresh blackberry taste, thick, yet easily spreadable No Artificial Flavors or Colors No High-Fructose Corn Syrup.',
      image: 'blackberry.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Take the sweet intensity of wild Maine blueberries and add the perfect amount of sugar and a splash of lemon.',
      image: 'blueberry.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Lavender',
      category: categories[1]._id,
      description:
      'Aromatic. Made from organic lavender, jam is a tasty example of pure simplicity. Its subtle flavor and sweet taste makes it a fun and interesting complement to baking and cooking recipes. ',
      image: 'lavender.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Plum',
      category: categories[1]._id,
      description:
      'Our jam is made with ripened, tender plums that feature smooth, sweet favors that are perfect for savory flavor combinations. The plums’ natural flavors combine beautifully with bread, cheese, ice cream and more!.',
      image: 'plum.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Raspberry',
      category: categories[1]._id,
      description:
      'Bursting with the intense flavors of generously sized chunks of rapsberries, jam will delight all raspberries lovers with its delicious and mouth watering taste.',
      image: 'raspberry.png',
      price: 35.00,
      quantity: 1
    },
    
    // Pancakes

    {
      name: 'Apple Cinnamon with Amla',
      category: categories[1]._id,
      description:
      'The Apple Cinnamon mix is deliciously balanced with whole grains, dates, apple and sweet potato for the mind, body and planet.',
      image: 'pancakeapplecinnamon.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Blueberry with Ashwagandha',
      category: categories[1]._id,
      description:
      'Our Blueberry mix is deliciously balanced with whole grains, blueberries and zucchini for the mind, body and planet.',
      image: 'pancakeblueberry.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Classic with Reishi',
      category: categories[1]._id,
      description:
      'Our Classic mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancakeclassic.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Matcha with Goji Berry',
      category: categories[1]._id,
      description:
      'Our Matcha mix is deliciously balanced with whole grains, matcha and goji berries for the mind, body and planet.',
      image: 'pancakematcha.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Turmeric Cinnamon with Ginger',
      category: categories[1]._id,
      description:
      'Our Turmeric mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancaketurmeric.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Protein with Chocolate Chip',
      category: categories[1]._id,
      description:
      'Our Chocolate Chip mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancakeprotein.png',
      price: 13.00,
      quantity: 1
    },

    //Syrup

    {
      name: 'Amber',
      category: categories[1]._id,
      description:
      'Our amber grade syrup has the most balanced flavor profile making it great for all-around use, perfect for those who do not want an overwhelming amount of maple flavor.',
      image: 'amber.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Our sugar free Blueberry Syrup uses the finest & fresh blueberries and a touch of lemon juice to recreate that familiar citric taste of homemade preserves. .',
      image: 'blueberrysyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Dark',
      category: categories[1]._id,
      description:
      'Our dark grade syrup os a favorite among maple lovers, produced late in the season when the sap runs less sweet. It is all natural and all locally produced with no additives of any kind.',
      image: 'darksyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Golden',
      category: categories[1]._id,
      description:
      'our golden syrup is delicious sugar syrup made by the evaporation of cane sugar juice. Golden Syrup is a favorite with chefs all over the world because of the sweet buttery flavor it adds to foods that improves the flavor of everything from pancakes to pecan pie.',
      image: 'goldensyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Lavender',
      category: categories[1]._id,
      description:
      'Aromatic and floral, lavender is embraced for its calming, soothing properties. Our Lavender Syrup adds semi-sweet, herbal floral flavor and beautiful, light purple color to cocktails, lemonades, sodas and more. ',
      image: 'lavendersyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Mint',
      category: categories[1]._id,
      description:
      'French children are partial to Teisseire syrups and mint is one their favorite flavors. Diluted in plain or sparkling water, Teisseire syrups add a colorful touch to afternoon snacks. The origin of Teisseire dates back to the early 18th century, when Mathieu Teisseire started making fruit based beverages. Today Teisseire makes the most popular syrups in France.',
      image: 'mintsyrup.png',
      price: 26.50,
      quantity: 1
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