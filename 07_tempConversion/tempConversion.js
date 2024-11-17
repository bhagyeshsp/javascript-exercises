let convertedTemperature = 0;

function round(x) {
  return Math.round(x * 10) / 10;
}

const convertToCelsius = function(temperature = 0) {
  convertedTemperature = round((temperature - 32) * (5/9));
  return convertedTemperature;
};

const convertToFahrenheit = function(temperature = 0) {
  convertedTemperature = round(temperature * (9/5) + 32);
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
