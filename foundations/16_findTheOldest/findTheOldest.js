const findTheOldest = function (peoples) {
    return peoples.reduce((accumulator, next) => {
        if (!accumulator.yearOfDeath) { accumulator.yearOfDeath = 2026 }
        if (!next.yearOfDeath) { next.yearOfDeath = 2026 }

        let accumulatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth
        let nextAge = next.yearOfDeath - next.yearOfBirth

        return accumulatorAge > nextAge ? accumulator : next;
    }, 0)
};
// Do not edit below this line
module.exports = findTheOldest;
