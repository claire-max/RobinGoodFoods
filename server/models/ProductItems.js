const mongoose = require('mongoose');

const { Schema } = mongoose;

const productItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const ProductItems = mongoose.model('ProductItems', productItemSchema);

module.exports = ProductItems;
