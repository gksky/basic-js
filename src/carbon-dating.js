const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var sa = parseFloat(sampleActivity);
  if (!isNaN(sa) && typeof(sampleActivity) == "string" && sa > 0 && sa <= MODERN_ACTIVITY) {
    return Math.round(HALF_LIFE_PERIOD / (Math.log(2) / Math.log(MODERN_ACTIVITY / sa)));
  } else return false;
};
