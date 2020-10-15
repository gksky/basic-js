const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(function(s) { if (typeof(s) == 'string') { t = s.toUpperCase().replace(/[ ]*/, ''); return t[0]}}).sort().join('');
  } else return false;
};
