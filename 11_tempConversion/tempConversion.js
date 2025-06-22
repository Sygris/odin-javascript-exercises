const convertToCelsius = function(fahrenheit) {
  // Formula: C = (F - 32) X (5/9)
  let result = (fahrenheit - 32) * (5/9)
  // Rounded to one decimal place which needs to be converted to a number after
  return parseFloat(result.toFixed(1))
};

const convertToFahrenheit = function(celsius) {
  // Formula: F = (C * 1.8) + 32
  let result = (celsius * 1.8) + 32
  return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
