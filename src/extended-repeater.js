const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  add = [];
  res = [];
  if (str !== null && str != undefined) add[0] = str.toString(); else add[0] = 'null';
  if (options.addition === undefined) options.addition = '';
  if (options.addition === null) options.addition = 'null'; else options.addition = options.addition.toString();

  if (options.addition) {
    add.push(options.addition);
    if (Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 1) {
      for (j = 1; j < options.additionRepeatTimes; j++) {
        if (options.additionSeparator) add.push(options.additionSeparator, options.addition); else add.push('|', options.addition);
      }
    }
  }
  res = add;
  if (Number.isInteger(options.repeatTimes) && options.repeatTimes > 0) {
    for (i = 1; i < options.repeatTimes; i++) {
        if (options.separator) res = res.concat(options.separator, add); else res = res.concat('+', add);
    }
  }
  return res.join('');
};
  