const removeFromArray = function (inputArray, ...removalValue) {
  let intersection = inputArray.filter(x => !removalValue.includes(x));
  return intersection;
}

// Do not edit below this line
module.exports = removeFromArray;
