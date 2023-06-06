"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = exports.Customer = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var customerSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});
var productSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  price: Number,
  rating: Number,
  category: String,
  brand: String
});

var Customer = _mongoose["default"].model('Customer', customerSchema);

exports.Customer = Customer;

var Product = _mongoose["default"].model('Product', productSchema);

exports.Product = Product;