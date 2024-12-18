const leapYears = function (inputYear) {
  if (inputYear !== null) {
    if (inputYear % 4 !== 0) {
      return false;
    } else if (inputYear % 4 === 0 && inputYear % 100 !== 0) {
      return true;
    } else if (
      inputYear % 4 === 0 &&
      inputYear % 100 === 0 &&
      inputYear % 400 === 0
    ) {
      return true;
    } else if (
      inputYear % 4 === 0 &&
      inputYear % 100 === 0 &&
      inputYear % 400 !== 0
    ) {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = leapYears;
