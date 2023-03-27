"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalSalary = totalSalary;
exports.departmentsQuantity = departmentsQuantity;
exports.departmentsSalary = departmentsSalary;
exports.employeesMethods = void 0;

var _emoloyees = require("./emoloyees.js");

function totalSalary(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i].salary;
  }

  return total;
}

console.log(totalSalary(_emoloyees.ArrEmp)); //-------------------------------------------

function departmentsQuantity(arr) {
  var departments = [];

  for (var i = 0; i < arr.length; i++) {
    if (!departments.includes(arr[i].department)) {
      departments.push(arr[i].department);
    }
  }

  return departments.length;
}

console.log(departmentsQuantity(_emoloyees.ArrEmp)); //---------------------------------------------

function departmentsSalary(arr) {
  var departments = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var emp = _step.value;
      var department = emp.department,
          salary = emp.salary;

      if (departments[department]) {
        departments[department] += salary;
      } else {
        departments[department] = salary;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return departments;
}

console.log(departmentsSalary(_emoloyees.ArrEmp)); //---------------------------------------------

var employeesMethods = {
  totalSalary: function totalSalary(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
      total += arr[i].salary;
    }

    return total;
  },
  departmentsQuantity: function departmentsQuantity(arr) {
    var departments = [];

    for (var i = 0; i < arr.length; i++) {
      if (!departments.includes(arr[i].department)) {
        departments.push(arr[i].department);
      }
    }

    return departments.length;
  },
  departmentsSalary: function departmentsSalary(arr) {
    var departments = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var emp = _step2.value;
        var department = emp.department,
            salary = emp.salary;

        if (departments[department]) {
          departments[department] += salary;
        } else {
          departments[department] = salary;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return departments;
  }
};
exports.employeesMethods = employeesMethods;