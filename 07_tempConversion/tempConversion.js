const convertToCelsius = function(number) {
  let converted = (number - 32)*(5/9);
  let result = Math.round(converted * 10) / 10;
  return result;
};

const convertToFahrenheit = function(number) {
  let converted = number * (9/5) + 32;
  let result = Math.round(converted * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
