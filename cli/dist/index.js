'use strict';

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var circle = new _circle2.default(10);
var circumference = circle.circumference();

console.log('cli: ' + circumference);