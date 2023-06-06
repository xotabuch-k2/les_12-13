"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

var _product = require("./model/product.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;
var url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/';
var app = (0, _express["default"])();
app.use(_express["default"]["static"]('css'));
app.set('view engine', 'pug');

_mongoose["default"].connect(url).then(function () {
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
      return "\n        <div style=\"border: 1px solid #000; \n        width: fit-content; \n        margin: 0 0 20px 0; \n        padding: 0 10px\">\n          <h2>".concat(product.title, "</h2>\n          <p>Price: ").concat(product.price, "</p>\n        </div>\n                ");
    });
    var html = "<h1>Products:</h1> ".concat(productsHtml.join(''));
    res.send(html);
  })["catch"](function (error) {
    console.error(error);
  });
});