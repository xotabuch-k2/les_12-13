"use strict";

// import mongoose from 'mongoose';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  title: String,
  price: Number,
  rating: Number,
  category: String,
  brand: String,
  color: [String],
  guarantee: {
    standard: String,
    extended: String
  }
});
var Product1 = mongoose.model('product', productSchema); // export {Product, productSchema};

var Product = require('./model/product.js');

var productSchema1 = require('./model/product.js');

module.exports = {
  Product: Product,
  productSchema: productSchema
};