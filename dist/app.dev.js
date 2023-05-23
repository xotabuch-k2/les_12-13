"use strict";

var _fs = require("fs");

var INuserss = [{
  name: 'Mike',
  age: 25
}, {
  name: 'Bob',
  age: 32
}, {
  name: 'Nikola',
  age: 17
}];
var newData = [{
  name: 'Anna',
  age: 24
}, {
  name: 'Tom',
  age: 21
}];

var isExist = function isExist(fileEnd) {
  return regeneratorRuntime.async(function isExist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_fs.promises.stat(fileEnd, _fs.Stats));

        case 3:
          return _context.abrupt("return", true);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", false);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

(function _callee() {
  var fileEnd, _users$users, _users$users2, data, users, finData;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fileEnd = 'D:\\Stady\\data.json';
          _context2.next = 3;
          return regeneratorRuntime.awrap(isExist(fileEnd));

        case 3:
          if (!_context2.sent) {
            _context2.next = 16;
            break;
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap(_fs.promises.readFile(fileEnd, {
            encoding: 'utf-8'
          }));

        case 6:
          data = _context2.sent;
          users = JSON.parse(data);

          (_users$users = users.users).push.apply(_users$users, INuserss);

          (_users$users2 = users.users).push.apply(_users$users2, newData);

          finData = JSON.stringify(users);
          _context2.next = 13;
          return regeneratorRuntime.awrap(_fs.promises.writeFile(fileEnd, finData, {
            encoding: 'utf-8'
          }));

        case 13:
          console.log('Data saved to data.json');
          _context2.next = 17;
          break;

        case 16:
          console.log('File does not exist.');

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
})();