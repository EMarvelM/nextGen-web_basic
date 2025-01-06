// calculate the lowest common multiple.
const lcm = function (n) {
    let cm = [];
    for (let divisor = 2; divisor <= n;) {
        if (!(n % divisor)) {
            cm.push(divisor);
            n = Number(n / divisor);
        } else {
            divisor++;
        }
    }
    return cm;
}

// console.log(lcm(24))



// calculate the greatest common divisor (GCD) of two numbers.
const greatestDivisor = function (x, y) {

    let [num1, num2] = [lcm(x), lcm(y)];
    if (num1.length > num2.length) {
        [num1, num2] = [num2, num1];
    }

    const numArray = num1.filter((n) => {
        if (num2.includes(n)) {
            num2.splice(num2.indexOf(n), 1);
            return true
        } else {
            return false
        }
    })


    return numArray.reduce((previous, current) => previous * current);
}

console.log(greatestDivisor(24, 18));
