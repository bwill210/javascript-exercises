const leapYears = function(year) {
    if (year % 4 == 0 && !(year % 100 == 0)) {
        return true;
    }
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
        return true;
    else return false;
};

// Do not edit below this line
// divisible by 4
// divisible by 100 and 400 = leap year
// divisible by 100 but not 400 = not leap year

module.exports = leapYears;
