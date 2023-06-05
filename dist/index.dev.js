"use strict";

//import mongoose from 'mongoose';
var mongoose = require('mongoose'); // import express from 'express';


var express = require('express'); // import {Product, productSchema} from './model/product.js'


var _require = require('./model/product.js'),
    Product = _require.Product,
    productSchema = _require.productSchema;

var url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/shop'; // const app = express();

mongoose.connect(url).then(function () {
  console.log('Connected to DB');
  app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
  });
})["catch"](function (err) {
  console.log("DB connection error: ".concat(err));
});
app.get('/', function (req, res) {
  Product.find().then(function (products) {
    var productsHtml = products.map(function (product) {
      return "\n<div style=\"border: 1px solid #000; \nwidth: fit-content; \nmargin: 0 0 20px 0; \npadding: 0 10px\">\n  <h2>".concat(product.title, "</h2>\n  <p>Price: ").concat(product.price, "</p>\n</div>\n        ");
    });
    var html = "<h1>Products:</h1> ".concat(productsHtml.join(''));
    res.send(html);
  })["catch"](function (error) {
    console.error(error);
  });
});
var connection = mongoose.createConnection(url, {
  maxPoolSize: 10
});
var Product1 = connection.model('product', productSchema);
connection.on('open', function () {
  console.log('Connected to the database!');
  app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
  });
});
connection.on('error', function (err) {
  console.error("Database connection error: ".concat(err));
});