'use strict';

var _adder = require('./modules/adder');

var _adder2 = _interopRequireDefault(_adder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var num1 = 4;
var num2 = 5;
var sum = (0, _adder2.default)(num1, num2);

console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);