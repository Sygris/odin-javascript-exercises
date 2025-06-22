const convertToCelsius = function(fahrenheit) {
  // Formula: C = (F - 32) X (5/9)
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  // Formula: F = (C * 1.8) + 32
  return Math.round(((celsius * 9) /5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
