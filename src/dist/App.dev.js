"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App() {//   const [Name, setName] = useState(initialState);
  //   const [Login, setLogin] = useState(initialState);
  //   const [Email, setEmai] = useState(initialState);
  //   const [Age, setAg] = useState(initialState);
  //   const submit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // }
  // return (
  // <div className="wrapper">
  // <form onSubmit={submit}>
  //       <label>Name</label>
  //       <input />
  //      <label>Login</label>
  //      <input />
  //      <label>Age</label>
  //      <input type="number" />
  //      <label>Email</label>
  //      <input />
  //      <button type="submit">Sign in</button>
  // </form>
  // </div>)
}

var _default = App;
exports["default"] = _default;