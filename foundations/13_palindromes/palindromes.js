const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = word
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    if (cleanedString.length === 0 || cleanedString.length === 1) { return true; }

    if (cleanedString.charAt(0) === cleanedString.charAt(cleanedString.length - 1)) {
        return palindromes(cleanedString.substring(1, cleanedString.length - 1));
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;