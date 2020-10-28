const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error('Аргумент функции не является массивом');
  }

  brr = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      switch (arr[i]) {
        case '--discard-next':
        i = i + 2;
          break;
        case '--double-prev':
          if (i > 0) brr.push(arr[i-1]);
          break;
        case '--discard-prev':
          if (i > 0) brr.pop();
          break;
        case '--double-next':
          i++;
          if (i < arr.length) brr.push(arr[i], arr[i]);
          break;
        default:
          brr.push(arr[i]);
      }
    } else brr.push(arr[i]);
  }

  return brr;
};
