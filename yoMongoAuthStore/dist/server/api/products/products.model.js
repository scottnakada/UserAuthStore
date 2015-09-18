'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    sku: String,
    name: String,
    description: String,
    price: Number,
    cal: Number,
    nutrients: {
        'Carotenoid': Number,
        'VitaminC': Number,
        'Folates': Number,
        'Potassium': Number,
        'Fiber': Number
    },
    image: String
});

module.exports = mongoose.model('Products', ProductsSchema);
