const leapYears = function(year) {
  const isDivisibleByFour = year % 4 === 0
  const isCentury = year % 100 === 0
  const isDivisibleByFourHundred = year % 400 == 0

  // If the input is diviible by 4 and is not a century or is divisible by 400 it's a leap year
  if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)) {
    return true
  }
  else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
