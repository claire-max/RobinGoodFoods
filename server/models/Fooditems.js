const { Schema } = require('mongoose');

const foodItemSchema = new Schema({
  name: 
    {
      type: String,
      require: true,
    },
  description: {
    type: String,
    required: true,
  },
  foodId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = foodItemSchema;