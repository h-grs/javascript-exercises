const repeatString = function (str, x) {
  let finalString = "";

  if (x < 0) {
    return "ERROR";
  }

  for (let i = 0; i < x; i++) {
    finalString += str;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
