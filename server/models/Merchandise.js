const { Schema } = require('mongoose');

const merchandiseSchema = new Schema({
    name: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
    },
    merchandiseId: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },

});

module.exports = merchandiseSchema;
