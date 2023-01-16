const db = require('./connection');
const { User, Product, Category, ProductItems } = require('../models');

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

    },
    {
      name: 'Croissants',
      description:
        'Croissants.',
      image: 'croissants.jpg',
      category: categories[0]._id,

    },
    {
      name: 'Jam',
      category: categories[0]._id,
      description:
        'Jam.',
      image: 'jam.jpg',

    },
    {
      name: 'Pancakes',
      category: categories[0]._id,
      description:
        'Pancakes.',
      image: 'pancakes.jpg',

    },
    {
      name: 'Syrup',
      category: categories[0]._id,
      description:
        'Syrup.',
      image: 'syrup.jpg',

    },
    {
      name: 'Bread',
      category: categories[0]._id,
      description:
        'Bread.',
      image: 'bread.jpg',

    },
    {
      name: 'Tea',
      category: categories[1]._id,
      description:
        'Tea.',
      image: 'tea.jpg',
    },
    {
      name: 'Coffee',
      category: categories[1]._id,
      description:
        'Coffee.',
      image: 'coffee.jpg',
    }
  ])
    // Adding products for Drinks
    //Coffee
    const productsItems = await ProductItems.insertMany([
    {   
      name: 'Blonderoast Coffee',
      product: products[7]._id,
      description:
        'Blonde roast coffee that has been roasted for a shorter period of time than medium and dark roast coffee.',
      image: 'blonderoast.png',
      price: 28.90,
      quantity: '32 Ounce'
    },
    {
      name: 'Darkroast Coffee',
      product: products[7]._id,
      description:
        'Dark roast coffee which is bittersweet in taste, as well as decadent chocolaty flavor.',
      image: 'darkroast.png',
      price: 32.50,
      quantity: '30 Ounce'
    },
    {
      name: 'Frenchroast Coffee',
      product: products[7]._id,
      description:
        'Perfect for k-cup brewers and people on-the-go and ready for a warm mug of good brew.',
      image: 'frenchroast.png',
      price: 43.00,
      quantity: '20 Ounce'
    },
    {
      name: 'Lightroast Coffee',
      product: products[7]._id,
      description:
        'Light body and mellow flavors in our lightest roast. Balanced with smooth and rich flovours.',
      image: 'lightroast.png',
      price: 19.99,
      quantity: '10 Ounce'
    },
    {
      name: 'Mediumroast Coffee',
      product: products[7]._id,
      description:
        'Not as dark and bold as the darker ones, but offer more complexity than a lighter roast.',
      image: 'mediumroast.png',
      price: 19.99,
      quantity: '10 Ounce'
    },
    //Tea
    {
      name: 'Black Tea',
      product: products[6]._id,
      description:
        'English Breakfast is our most popular tea. To create this well-balanced blend, we carefully select the finest teas from four different regions, each with its own unique characteristics.',
      image: 'blacktea.png',
      price: 29.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Blueberry lavender Tea',
      product: products[6]._id,
      description:
      'Blueberry lavender Tea has the robustness from these regions is complemented by the softer and more subtle teas',
      image: 'blueberrylavendertea.png',
      price: 29.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Camomile Tea',
      product: products[6]._id,
      description:
      'Since 1969, Celestial Seasonings has been committed to creating the most flavorful and inspiring cup of tea. We source the highest quality herbs, teas and botanicals, like our cool whistling peppermint cultivated in the Pacific Northwest and our golden, floral chamomile grown in the fields of Egypt.',
      image: 'camomiletea.png',
      price: 19.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Green Tea',
      product: products[6]._id,
      description:
      'Our Decaffeinated Green Tea has a smooth taste and refreshing aroma that can be enjoyed hot or iced. Picked at the peak of flavor and naturally decaffeinated, the tea leaves are high in flavonoids and brew a full-bodied beverage that is light, fresh, and never bitter.',
      image: 'greentea.png',
      price: 9.99,
      quantity: '35 Ounce'
    },
    {
      name: 'Mint Tea',
      product: products[6]._id,
      description:
      'BRING ON THE CALM WITH THIS WARM HERBAL TISANE- A nourishing wholesome blend of real Peppermint leaves that brings nutrition with every delectable sip.',
      image: 'minttea.png',
      price: 17.99,
      quantity: '20 Ounce'
    },
    {
      name: 'Turmeric Ginger Tea',
      product: products[6]._id,
      description:
      'Turmeric Ginger is made by bringing water to a boil, adding turmeric, ginger, and cinnamon',
      image: 'turmericgingertea.png',
      price: 19.99,
      quantity: '20 Ounce'
    },

    //Adding Merchandise content
    {
      name: 'Black Hat',
      category: categories[2]._id,
      description:
      'Complete your look with this fitted Baseball Cap, your perfect wardrobe-essential accessory',
      image: ['backofblack.png', 'blackhat.png'],
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White Hat',
      category: categories[2]._id,
      description:
      'Keeps you warm or cool, hypoallergenic, washable, packable, shapeable, water repellent or water resistant, lightweight.',
      image: ['backofwhitehat.png', 'whitehat.png'],
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White long sleeve tshirt',
      category: categories[2]._id,
      description:
      'Made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth.',
      image: ['backofwhitelongsleeve.png','whitelongsleeve.png'],
      price: 19.99,
      quantity: 1
    },
    {
      name: 'White mug',
      category: categories[2]._id,
      description:
      'Cylindrical cool white mug for drinking tea or coffee',
      image: ['backofwhitemug.png','whitemug.png'],
      price: 9.99,
      quantity: 1
    },
    {
      name: 'RobinGoods Carry-On Travel Backpack - Black',
      category: categories[2]._id,
      description:
      'Carry-on travel backpack with internal, zippered laptop sleeve; ultra-flexible and lightweight; made of durable polyester',
      image: 'backpack.png',
      price: 49.99,
      quantity: 1
    },
    {
      name: 'Blanket',
      category: categories[2]._id,
      description:
      'Robingood blanket is made of 3 layers with a thicken and strong waterproof fabric on top, a soft cotton middle and a durable, moisture resistant PEVA fabric backing. ',
      image: 'blanket.png',
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Cooler',
      category: categories[2]._id,
      description:
      'FULLY INSULATED: Lid and body Keeps the Ice up to 4 days in temperatures as high as 90°F, for easy carrying and lifting, Molded into the lid to keep drinks from spilling; fit up to a 30-oz. tumbler',
      image: 'cooler.png',
      price: 35.00,
      quantity: 1
    },
    {
      name: 'Popsocket',
      category: categories[2]._id,
      description:
      'Innovative 360 degree rotating finger holder for secure grip and extended thumb reach for smartphones, tablets and e-readers, as well as for cases.',
      image: 'popsocket.png',
      price: 9.99,
      quantity: 6
    },
    {
      name: 'Recipe Book',
      category: categories[2]._id,
      description:
      'Pull out your mixer and dust off those cake pans! It is time to flip on the oven and create your next favorite cake. With tens of thousands of Cake Confidence cookbook copies already sold worldwide',
      image: 'recipebook.png',
      price: 17.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt',
      category: categories[2]._id,
      description:
      'Snug, secure fit through the body. Soft, lightweight, moisture wicking jersey fabric with brushed back',
      image: 'sweatshirtflippingfantastic.png',
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt - Self Love',
      category: categories[2]._id,
      description:
      'This self love Sweatshirt is a EcoSmart mid-weight cotton/poly fleece with up to 5% of the poly fibers.',
      image: 'sweatshirtmoreselflove.png',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Teddy Bear',
      category: categories[2]._id,
      description:
      'A 1 foot tall plush teddy bear measures 12 inches from head to foot. N ot too large Not too tiny! fluffy and plump. It is portable and ideal for hugging. Teddy bear in the ideal size is suitable for all ages.',
      image: 'teddybear.png',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Totebag',
      category: categories[2]._id,
      description:
      '15"W x 16"H, made of 100% 5oz natural cotton, lock stitching inside, with compacted stitching throughout, including cross-stitching at the handles for maximum strength allowing the bag to hold up extra bearing capacity, which are much stronger than our competitors.',
      image: 'totebag.png',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Travel Bag',
      category: categories[2]._id,
      description:
      'Dry Wet Separated Tote Bag】The high density water resistant material can help you to separate dry items and wet items,if you have wet clothes or towel,you can put it in this crossbody bag. Dimensions H*W*T, 27x55x18cm /10.63*21.65*7.09 inch,0.6kg weight.',
      image: 'travelbag.png',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Umbrella',
      category: categories[2]._id,
      description:
      'Robinhood umbrella with dome-shaped canopy and stars design for maximum rain coverage and see-through visibility',
      image: 'umbrella.png',
      price: 15.00,
      quantity: 1
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
