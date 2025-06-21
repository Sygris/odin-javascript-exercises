// @param {int} min - first Number
// @param {int} max - second Number
const sumAll = function(min, max) {
  // Guard clauses so it only works with integers (not floats, strings, etc)
  if (min < 0 || max < 0) return "ERROR"
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"

  // Swaps the values around
  if (min > max) [min, max] = [max, min]

  // Empty variable to hold the result
  let sum = 0
  for (let index = min; index <= max; index++) {
    sum += index      
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;
