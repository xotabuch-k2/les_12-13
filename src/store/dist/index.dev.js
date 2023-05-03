"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var couterReducer = function couterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coffee: 0,
    sugar: 0,
    isLoggedIn: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'incrementCoffee') {
    return _objectSpread({}, state, {
      coffee: state.coffee + 1,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'decrementCoffee') {
    return _objectSpread({}, state, {
      coffee: state.coffee - 1,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'increase') {
    return _objectSpread({}, state, {
      coffee: state.coffee + action.number,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'logIn') {
    return _objectSpread({}, state, {
      coffee: state.coffee,
      isLoggedIn: true
    });
  }

  if (action.type === 'incrementSugar') {
    return _objectSpread({}, state, {
      sugar: state.sugar + 1,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'decrementSugar') {
    return _objectSpread({}, state, {
      sugar: state.sugar - 1,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'increaseS') {
    return _objectSpread({}, state, {
      sugar: state.sugar + action.number,
      isLoggedIn: state.isLoggedIn
    });
  }

  if (action.type === 'logIn') {
    return _objectSpread({}, state, {
      sugar: state.sugar,
      isLoggedInS: true
    });
  }

  if (action.type === 'logOut') {
    return _objectSpread({}, state, {
      isLoggedIn: false
    });
  }

  if (action.type === 'resetList') {
    return {
      coffee: 0,
      "super": 0,
      isLoggedIn: state.isLoggedIn
    };
  }

  return state;
};

var store = (0, _redux.legacy_createStore)(couterReducer);
var _default = store;
exports["default"] = _default;