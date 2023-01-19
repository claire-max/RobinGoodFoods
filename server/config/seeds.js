const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Begels' },
    { name: 'Croissants' },
    { name: 'Jam' },
    { name: 'Pancakes' },
    { name: 'Syrup' },
    { name: 'Bread' },
    { name: 'Tea' },
    { name: 'Coffee' },
    { name: 'Swag' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    //Begels
    {
      name: 'Blueberry Bagel',
      description:
        'Remix your morning with our organic blueberry bagels',
      image: 'BlueberryBagel.png',
      category: categories[0]._id,
      price: 30.00,
      quantity: 10
    },
    {
      name: 'Classic Bagel',
      description:
        'Start your morning right with our classic organic bagel that will make your breakfast epic!',
      image: 'OriginalBagel.png',
      category: categories[0]._id,
      price: 30.00,
      quantity: 10
    },
    //Croissants
    {
      name: 'Almond',
      description:
        'Soft & flaky. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'almond.png',
      category: categories[1]._id,
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Blueberry',
      description:
        'Savory and Sweet. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'blueberry.png',
      category: categories[1]._id,
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Chocolate',
      description:
        'A whole lot of chocolate plus the savory. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'chocolate.png',
      category: categories[1]._id,
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Original',
      description:
        'Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'original.png',
      category: categories[1]._id,
      price: 36.00,
      quantity: 10
    },

    //Jam
    {
      name: 'Blackberry',
      description:
        'Bursting with fresh blackberry taste, thick, yet easily spreadable No Artificial Flavors or Colors No High-Fructose Corn Syrup.',
      image: 'blackberry.png',
      category: categories[2]._id,
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Blueberry',
      description:
        'Take the sweet intensity of wild Maine blueberries and add the perfect amount of sugar and a splash of lemon.',
      image: 'blueberry.png',
      category: categories[2]._id,
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Lavender',
      description:
        'Aromatic. Made from organic lavender, jam is a tasty example of pure simplicity. Its subtle flavor and sweet taste makes it a fun and interesting complement to baking and cooking recipes. ',
      image: 'lavender.png',
      category: categories[2]._id,
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Plum',
      description:
        'Our jam is made with ripened, tender plums that feature smooth, sweet favors that are perfect for savory flavor combinations. The plums’ natural flavors combine beautifully with bread, cheese, ice cream and more!.',
      image: 'plum.png',
      category: categories[2]._id,
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Raspberry',
      description:
        'Bursting with the intense flavors of generously sized chunks of rapsberries, jam will delight all raspberries lovers with its delicious and mouth watering taste.',
      image: 'raspberry.png',
      category: categories[2]._id,
      price: 35.00,
      quantity: 1
    },
    // Pancakes
    {
      name: 'Apple Cinnamon with Amla',
      description:
        'The Apple Cinnamon mix is deliciously balanced with whole grains, dates, apple and sweet potato for the mind, body and planet.',
      image: 'pancakeapplecinnamon.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Blueberry with Ashwagandha',
      description:
        'Our Blueberry mix is deliciously balanced with whole grains, blueberries and zucchini for the mind, body and planet.',
      image: 'pancakeblueberry.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Classic with Reishi',
      description:
        'Our Classic mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancaketurmeric.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Matcha with Goji Berry',
      description:
        'Our Matcha mix is deliciously balanced with whole grains, matcha and goji berries for the mind, body and planet.',
      image: 'pancakematcha.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Turmeric Cinnamon with Ginger',
      description:
        'Our Turmeric mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancaketurmeric.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Protein with Chocolate Chip',
      description:
        'Our Chocolate Chip mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancakeprotein.png',
      category: categories[3]._id,
      price: 13.00,
      quantity: 1
    },

    //Syrup
    {
      name: 'Amber',
      description:
        'Our amber grade syrup has the most balanced flavor profile making it great for all-around use, perfect for those who do not want an overwhelming amount of maple flavor.',
      image: 'amber.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Blueberry',
      description:
        'Our sugar free Blueberry Syrup uses the finest & fresh blueberries and a touch of lemon juice to recreate that familiar citric taste of homemade preserves. .',
      image: 'blueberrysyrup.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Dark',
      description:
        'Our dark grade syrup os a favorite among maple lovers, produced late in the season when the sap runs less sweet. It is all natural and all locally produced with no additives of any kind.',
      image: 'darksyrup.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Golden',
      description:
        'our golden syrup is delicious sugar syrup made by the evaporation of cane sugar juice. Golden Syrup is a favorite with chefs all over the world because of the sweet buttery flavor it adds to foods that improves the flavor of everything from pancakes to pecan pie.',
      image: 'goldensyrup.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Lavender',
      description:
        'Aromatic and floral, lavender is embraced for its calming, soothing properties. Our Lavender Syrup adds semi-sweet, herbal floral flavor and beautiful, light purple color to cocktails, lemonades, sodas and more. ',
      image: 'lavendersyrup.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Mint',
      description:
        'French children are partial to Teisseire syrups and mint is one their favorite flavors. Diluted in plain or sparkling water, Teisseire syrups add a colorful touch to afternoon snacks. The origin of Teisseire dates back to the early 18th century, when Mathieu Teisseire started making fruit based beverages. Today Teisseire makes the most popular syrups in France.',
      image: 'mintsyrup.png',
      category: categories[4]._id,
      price: 26.50,
      quantity: 1
    },

    //Bread
    {
      name: 'Wheat',
      description:
        '100% Whole Wheat bread is baked with a rich taste you will  love. Our bread is free from artificial preservatives, colors and flavors with No Added Nonsense..',
      image: 'Wheat.png',
      category: categories[5]._id,
      price: 28.66,
      quantity: 20
    },

    {
      name: 'White',
      description:
        'With the classic white bread taste the whole family loves and 8 grams of whole grains per serving, Healthy Habits White made with Whole Grain bread means you don’t have to choose between the delicious taste you want and the whole grains you need.',
      image: 'White.png',
      category: categories[5]._id,
      price: 9.99,
      quantity: 100
    },

    //Tea
    {
      name: 'Black Tea',
      description:
        'English Breakfast is our most popular tea. To create this well-balanced blend, we carefully select the finest teas from four different regions, each with its own unique characteristics.',
      image: 'blacktea.png',
      category: categories[6]._id,
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Blueberry lavender Tea',     
      description:
        'Blueberry lavender Tea has the robustness from these regions is complemented by the softer and more subtle teas',
      image: 'blueberrylavendertea.png',
      category: categories[6]._id,
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Camomile Tea',     
      description:
        'Since 1969, Celestial Seasonings has been committed to creating the most flavorful and inspiring cup of tea. We source the highest quality herbs, teas and botanicals, like our cool whistling peppermint cultivated in the Pacific Northwest and our golden, floral chamomile grown in the fields of Egypt.',
      image: 'camomiletea.png',
      category: categories[6]._id,
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Green Tea',     
      description:
        'Our Decaffeinated Green Tea has a smooth taste and refreshing aroma that can be enjoyed hot or iced. Picked at the peak of flavor and naturally decaffeinated, the tea leaves are high in flavonoids and brew a full-bodied beverage that is light, fresh, and never bitter.',
      image: 'greentea.png',
      category: categories[6]._id,
      price: 9.99,
      quantity: 35
    },
    {
      name: 'Mint Tea',    
      description:
        'BRING ON THE CALM WITH THIS WARM HERBAL TISANE- A nourishing wholesome blend of real Peppermint leaves that brings nutrition with every delectable sip.',
      image: 'minttea.png',
      category: categories[6]._id,
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Turmeric Ginger Tea',    
      description:
        'Turmeric Ginger is made by bringing water to a boil, adding turmeric, ginger, and cinnamon',
      image: 'turmericgingertea.png',
      category: categories[6]._id,
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Blonderoast Coffee',
      description:
        'Blonde roast coffee that has been roasted for a shorter period of time than medium and dark roast coffee.',
      image: 'blonderoast.png',
      category: categories[7]._id,
      price: 28.90,
      quantity: 32
    },
    {
      name: 'Darkroast Coffee',
      description:
        'Dark roast coffee which is bittersweet in taste, as well as decadent chocolaty flavor.',
      image: 'darkroast.png',
      category: categories[7]._id,
      price: 32.50,
      quantity: 30
    },
    {
      name: 'Frenchroast Coffee',
      description:
        'Perfect for k-cup brewers and people on-the-go and ready for a warm mug of good brew.',
      image: 'frenchroast.png',
      category: categories[7]._id,
      price: 43.00,
      quantity: 20
    },
    {
      name: 'Lightroast Coffee',
      description:
        'Light body and mellow flavors in our lightest roast. Balanced with smooth and rich flovours.',
      image: 'lightroast.png',
      category: categories[7]._id,
      price: 19.99,
      quantity: 10
    },
    {
      name: 'Mediumroast Coffee',
      description:
        'Not as dark and bold as the darker ones, but offer more complexity than a lighter roast.',
      image: 'mediumroast.png',
      category: categories[7]._id,
      price: 19.99,
      quantity: 10
    },
    //Adding Merchandise content
    {
      name: 'Black Hat',
      description:
        'Complete your look with this fitted Baseball Cap, your perfect wardrobe-essential accessory',
      image: 'backofblack.png',
      category: categories[8]._id,
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White Hat',
      description:
        'Keeps you warm or cool, hypoallergenic, washable, packable, shapeable, water repellent or water resistant, lightweight.',
      image: 'backofwhitehat.png',
      category: categories[8]._id,
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White long sleeve tshirt',
      description:
        'Made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth.',
      image: 'backofwhitelongsleeve.png',
      category: categories[8]._id,
      price: 19.99,
      quantity: 1
    },
    {
      name: 'White mug',
      description:
        'Cylindrical cool white mug for drinking tea or coffee',
      image: 'backofwhitemug.png',
      category: categories[8]._id,
      price: 9.99,
      quantity: 1
    },
    {
      name: 'RobinGoods Carry-On Travel Backpack - Black',
      description:
        'Carry-on travel backpack with internal, zippered laptop sleeve; ultra-flexible and lightweight; made of durable polyester',
      image: 'backpack.png',
      category: categories[8]._id,
      price: 49.99,
      quantity: 1
    },
    {
      name: 'Blanket',
      description:
        'Robingood blanket is made of 3 layers with a thicken and strong waterproof fabric on top, a soft cotton middle and a durable, moisture resistant PEVA fabric backing. ',
      image: 'blanket.png',
      category: categories[8]._id,
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Cooler',
      description:
        'FULLY INSULATED: Lid and body Keeps the Ice up to 4 days in temperatures as high as 90°F, for easy carrying and lifting, Molded into the lid to keep drinks from spilling; fit up to a 30-oz. tumbler',
      image: 'cooler.png',
      category: categories[8]._id,
      price: 35.00,
      quantity: 1
    },
    {
      name: 'Popsocket',
      description:
        'Innovative 360 degree rotating finger holder for secure grip and extended thumb reach for smartphones, tablets and e-readers, as well as for cases.',
      image: 'popsocket.png',
      category: categories[8]._id,
      price: 9.99,
      quantity: 6
    },
    {
      name: 'Recipe Book',
      description:
        'Pull out your mixer and dust off those cake pans! It is time to flip on the oven and create your next favorite cake. With tens of thousands of Cake Confidence cookbook copies already sold worldwide',
      image: 'recipebook.png',
      category: categories[8]._id,
      price: 17.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt',
      description:
        'Snug, secure fit through the body. Soft, lightweight, moisture wicking jersey fabric with brushed back',
      image: 'sweatshirtflippingfantastic.png',
      category: categories[8]._id,
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt - Self Love',
      description:
        'This self love Sweatshirt is a EcoSmart mid-weight cotton/poly fleece with up to 5% of the poly fibers.',
      image: 'sweatshirtmoreselflove.png',
      category: categories[8]._id,
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Teddy Bear',
      description:
        'A 1 foot tall plush teddy bear measures 12 inches from head to foot. N ot too large Not too tiny! fluffy and plump. It is portable and ideal for hugging. Teddy bear in the ideal size is suitable for all ages.',
      image: 'teddybear.png',
      category: categories[8]._id,
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Totebag',
      description:
        '15"W x 16"H, made of 100% 5oz natural cotton, lock stitching inside, with compacted stitching throughout, including cross-stitching at the handles for maximum strength allowing the bag to hold up extra bearing capacity, which are much stronger than our competitors.',
      image: 'totebag.png',
      category: categories[8]._id,
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Travel Bag',
      description:
        'Dry Wet Separated Tote Bag】The high density water resistant material can help you to separate dry items and wet items,if you have wet clothes or towel,you can put it in this crossbody bag. Dimensions H*W*T, 27x55x18cm /10.63*21.65*7.09 inch,0.6kg weight.',
      image: 'travelbag.png',
      category: categories[8]._id,
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Umbrella',
      description:
        'Robinhood umbrella with dome-shaped canopy and stars design for maximum rain coverage and see-through visibility',
      image: 'umbrella.png',
      category: categories[8]._id,
      price: 15.00,
      quantity: 1
    },
  ])

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
