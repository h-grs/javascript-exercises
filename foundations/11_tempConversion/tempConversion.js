const convertToCelsius = function (F) {
  var rounder = Math.pow(10, 1);

  return Math.round((5 / 9) * (F - 32) * 10) / 10;
};

const convertToFahrenheit = function (C) {
  return Math.round(((C * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
