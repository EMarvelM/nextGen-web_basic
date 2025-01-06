const lcm = require('./07-lowest_common_multiple').lcm; // import lcm to calculate GCD

// calculate the greatest common divisor (GCD) of two numbers.
const greatestDivisor = function (x, y) {

    let [num1, num2] = [lcm(x), lcm(y)];

    const numArray = num1.filter((n) => {
        if (num2.includes(n)) {
            num2.splice(num2.indexOf(n), 1);
            return true
        } else {
            return false
        }
    })

    // make sure the more lengthed array is used to check for the common
    if (num1.length > num2.length) {
        [num1, num2] = [num2, num1];
    }

    // for each number in both array check for similarity
    const numArray2 = num1.filter((n) => {
        if (num2.includes(n)) {
            num2.splice(num2.indexOf(n), 1);
            return true
        } else {
            return false
        }
    })


    return numArray.reduce((previous, current) => previous * current) * numArray2.reduce((previous, current) => previous * current);
    
}

console.log(greatestDivisor(24, 18));
