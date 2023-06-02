"use strict";

var _express = _interopRequireDefault(require("express"));

var _product = require("./model/product.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose from 'mongoose';
var url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/shop';
var app = (0, _express["default"])();
mongoose.connect(url).then(function () {
  console.log('Connected to DB');
  app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
  });
})["catch"](function (err) {
  console.log("DB connection error: ".concat(err));
});
app.get('/', function (req, res) {
  _product.Product.find().then(function (products) {
    var productsHtml = products.map(function (product) {
      return "\n<div style=\"border: 1px solid #000; \nwidth: fit-content; \nmargin: 0 0 20px 0; \npadding: 0 10px\">\n  <h2>".concat(product.title, "</h2>\n  <p>Price: ").concat(product.price, "</p>\n</div>\n        ");
    });
    var html = "<h1>Products:</h1> ".concat(productsHtml.join(''));
    res.send(html);
  })["catch"](function (error) {
    console.error(error);
  });
}); // const connection = mongoose.createConnection(url, {maxPoolSize: 10})
// const Product = connection.model('product', productSchema);
// connection.on('open', () => {
//     console.log('Connected to the database!');
//     app.listen(PORT, ()=> {
//         console.log(`Server started on http://localhost:${PORT}`);
//     })
//   });
//   connection.on('error', (err) => {
//     console.error(`Database connection error: ${err}`);
//   });