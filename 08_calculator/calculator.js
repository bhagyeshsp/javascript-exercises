const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1) - (num2);
};

const sum = function(inputArray = [0]) {
	let result = 0;
  for(const element of inputArray){
    result += element;
  }
  return result;
  };

const multiply = function(inputArray = [0]) {
  let result = 1;
  for(const element of inputArray){
    result *= element;
  }
  return result;
};

const power = function(base, raise) {
  return base ** raise;
};

const factorial = function(num) {
	let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
