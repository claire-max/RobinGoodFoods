const { Schema } = require('mongoose');

const drinkItemSchema = new Schema({
  name: 
    {
      type: String,
      require: true,
    },
  description: {
    type: String,
    required: true,
  },
  drinkSId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = drinkItemSchema;