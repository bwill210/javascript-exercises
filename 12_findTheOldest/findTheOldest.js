const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentPersonAge > oldestAge ? currentPerson : oldest
    })
};


function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;