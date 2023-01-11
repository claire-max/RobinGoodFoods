const { Schema } = require('mongoose');

const feedbackSchema = new Schema({
  name:
    {
      type: String,
      required: true,
    },
  description: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }
});

module.exports = feedbackSchema;