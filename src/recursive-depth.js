const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let t = this.calculateDepth(arr[i]);
        if (t > count) count = t;
      }
    }
    return count + 1;
  }
};