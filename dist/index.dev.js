"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/';
var app = (0, _express["default"])();

_mongoose["default"].connect(url);