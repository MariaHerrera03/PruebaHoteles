const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);