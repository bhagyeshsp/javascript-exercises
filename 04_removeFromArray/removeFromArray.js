const removeFromArray = function (inputArray, ...removalValue) {
  let resultArray = inputArray.filter(x => !removalValue.includes(x));
  return resultArray;
}

// Do not edit below this line
module.exports = removeFromArray;
