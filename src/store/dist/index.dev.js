'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _redux = require('redux');

var couterReducer = function couterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coffee: 0,
    sugar: 0,
    isLoggedIn: false,
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'incrementCoffee') {
    return {
      coffee: state.coffee + 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'decrementCoffee') {
    return {
      coffee: state.coffee - 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'increaseCoffee') {
    return {
      coffee: state.coffee + action.number,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'incrementSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar + 1,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'decrementSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar - 1,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'increaseSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar + action.number,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'logIn') {
    return {
      coffee: state.coffee,
      sugar: state.sugar,
      isLoggedIn: true,
    };
  }

  if (action.type === 'logOut') {
    return {
      coffee: state.coffee,
      sugar: state.sugar,
      isLoggedIn: false,
    };
  }

  if (action.type === 'save') {
    return {
      coffee: +action.setCoffee,
      sugar: +action.setSugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'clear') {
    return {
      coffee: 0,
      sugar: 0,
      isLoggedIn: state.isLoggedIn,
    };
  }

  return state;
};

var store = (0, _redux.legacy_createStore)(couterReducer);
var _default = store;
exports['default'] = _default;