// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    title: String,
    price: Number,
    rating: Number,
    category: String,
    brand: String,
    color: [String],
    guarantee: {
        standard: String,
        extended: String
    }})

const Product = mongoose.model('product', productSchema);

// export {Product, productSchema};
const Product = require('./model/product.js');
const productSchema1 = require('./model/product.js');
module.exports = { Product, productSchema };
