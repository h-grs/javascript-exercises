const fibonacci = function (n) {
    let count = 0;

    if (typeof n !== 'number') {
        count = parseInt(n)
    } else { count = n }
    if (count < 0) { return "OOPS"; } else if (count === 0) { return 0; }

    let sum = 0
    let num1 = 0;
    let num2 = 1;;

    for (let i = 3; i <= count; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
