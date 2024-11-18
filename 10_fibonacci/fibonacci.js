const fibonacci = function (num) {
  num = Number(num);
  let result = [1, 1];
  let appendElement = "";
  // Suppose we want to generate fibonacci sequence [1, 1, 2, 3, 5, 8,]
  // Seed the array with the first two values [1,1]
  // Begin a loop
  // Loop generates the next number by adding index-1 and index-2 numbers
  // Loop stops when the index reaches the provided number
  if (num === 0) return 0;
  else if (num < 0) return "OOPS";
  else {
    for (let i = 2; i <= num; i++) {
      appendElement = result[i - 1] + result[i - 2];
      result.push(appendElement);
    }
    return result[num - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
