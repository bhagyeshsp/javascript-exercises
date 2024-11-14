const sumAll = function (arg1, arg2) {
  let num1 = 0;
  let num2 = 0;
  if (arg1 < 0 || arg2 < 0) {
    return "ERROR";
  } else if (arg1 != Math.floor(arg1) || arg2 != Math.floor(arg2)) {
    return "ERROR";
  } else if (arg1 === NaN || arg2 === NaN) {
    return "ERROR";
  } else if (typeof arg1 === "string" || typeof arg2 === "string") {
    return "ERROR";
  } else {
    if (arg1 > arg2) {
      num1 = arg2;
      num2 = arg1;
    } else {
      num1 = arg1;
      num2 = arg2;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
