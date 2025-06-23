const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
  let result = 0

  numbers.forEach(element => {
    result += element
  });

  return result
};

const multiply = function(numbers) {
  let result = 1

  numbers.forEach(element => {
    result *= element
  });

  return result
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(number) {
	let result = 1

  for (let index = 1; index <= number; index++) {
    result *= index
  }

  return result
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
