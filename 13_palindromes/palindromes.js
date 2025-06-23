const palindromes = function (string) {
  // Regular Expression that looks only for letters and numbers
  const regex = /[a-z0-9]/g

  // Cleans the string (makes it lowercase and returns and array with the result of match())
  const cleanedArray = string
    .toLowerCase()
    .match(regex)

  // Checks if the array is null if so abort
  if(!cleanedArray) return false

  // Reverses the content of cleanedArray and copies it to reversedArray
  // [...cleanedArray] creates a shallow copy of the cleanedArray to prevent .reverse() from affecting the cleanedArray variable
  const reversedArray = [...cleanedArray].reverse()

  return cleanedArray.join("") === reversedArray.join("")
};

// Do not edit below this line
module.exports = palindromes;
