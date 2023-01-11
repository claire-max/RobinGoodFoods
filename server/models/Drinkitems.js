const { Schema } = require('mongoose')

const drinkItemsSchema = new Schema({
    name: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
    },
    drinkId: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },

});

module.exports = drinkItemsSchema;