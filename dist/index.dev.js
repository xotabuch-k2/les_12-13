"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _customers = require("./model/customers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;
var url = '';
var app = (0, _express["default"])();

_mongoose["default"].connect(url).then(function () {
  console.log('Connected to DB');
  app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
  });
})["catch"](function (err) {
  console.log("DB connection error: ".concat(err));
});

app.get('/', function (req, res) {
  _customers.Customer.find().populate('product_id').then(function (customers) {
    var productsHtml = customers.map(function (customer) {
      return "\n          <div style=\"border: 1px solid #000; width: fit-content; margin: 0 0 20px 0; padding: 0 10px\">\n            <span>".concat(customer.name, ":</span> <span style=\"padding: 0 10px\">").concat(customer.product_id.title, "</span>  <span>Price: ").concat(customer.product_id.price, "</span>\n          </div>\n        ");
    });
    var html = "<h1>Users purchases:</h1> ".concat(productsHtml.join(''));
    res.send(html);
  })["catch"](function (error) {
    console.error(error);
  });
});