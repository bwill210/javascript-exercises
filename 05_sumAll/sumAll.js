const sumAll = function(num1, num2) {
    let sum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || 
        num1 < 0 || num2 < 0)
        return "ERROR";
    if (num1 < num2){
        sum = num1;
        lowNum = num1;
        highNum = num2;
    }
    else {
        sum = num2;
        lowNum = num2
        highNum = num1
    }
    let i = 0;
    let numToAdd = lowNum + 1;
    while (i < highNum - lowNum) {
        sum += numToAdd;
        ++numToAdd;
        ++i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
