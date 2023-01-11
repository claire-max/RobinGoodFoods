const db = require('../config/connection');
const { Index } = require('../models');
const profileSeeds = require('./file.json');
db.once('open', async () => {
  try {
    await Index.deleteMany({});
    await Index.create(profileSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
//May have to add at later date