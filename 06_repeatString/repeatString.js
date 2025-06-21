/*
  @param {string} text - String to be repeated
  @param {times} int - Number of times for the string to be repeated
*/
const repeatString = function(string, times) {

  // return string.repeat(times)

  // Guard clause where it returns "ERROR" if times is a negative number
  if (times < 0) {
    return "ERROR"
  }

  // Test using loop 
  let output = ""
  for (let index = 0; index < times; index++) {
    output += string
   } 
  return output
};

// Do not edit below this line
module.exports = repeatString;
