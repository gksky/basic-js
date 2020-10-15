const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turns = Math.pow(2, disksNumber) - 1;
  var time = Math.floor(3600 * turns / turnsSpeed);
  return {turns: turns, seconds: time};
};
