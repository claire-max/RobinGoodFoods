const { Schema } = require('mongoose');

const merchandiseSchema = new Schema({
  name: 
    {
      type: String,
      require: true,
    },
  description: {
    type: String,
    required: true,
  },
  merchandiseId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = merchandiseSchema;
