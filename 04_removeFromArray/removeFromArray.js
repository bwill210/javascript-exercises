const removeFromArray = function(array, ...args) {
    let i = 0;
    while (i < arguments.length){
        let index = array.indexOf(arguments[i]);

        if (index >= 0) { // if item exists in array, remove it.
            array.splice(index, 1);
        }
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
