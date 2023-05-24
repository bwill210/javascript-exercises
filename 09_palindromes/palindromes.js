/*
const palindromes = function (string) {
    const str = string.toLowerCase();
    let lastIndex = str.length -1;
    let i = 0;
    let j = lastIndex;
    while (i < j) {
        if (str[i] == ' ' || str[i] == "'" || str[i] == "," || 
            str[i] == "!" || str[i] == "?" || str[i] == ".") {
            i++;
            continue;
        }
        if (str[j] == ' ' || str[j] == "'" || str[j] == "," || 
            str[j] == "!" || str[j] == "?" || str[j] == ".") {
            j--;
            continue;
        }
        if (str[i] == str[j]) {
            i++;
            j--;
            continue;
        }
        else {
            return false;
        }
    }   return true;
};
*/


const palindromes = function (string) {
    const processedStr = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedStr == processedStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;