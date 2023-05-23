const add = function(x, y) {
	const result = x + y;
  return result;
};

const subtract = function(x, y) {
	const result = x - y;
  return result;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, nextItem) => accumulator * nextItem);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n == 0) {
    return 1;
  }
	return n*factorial(n-1);
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
