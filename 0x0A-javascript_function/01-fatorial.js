// calculates the factorial of a number using a function expression

const factorial = function (n) {
    let total = 1;
    for (; n > 0; n--) {
        total *= n;
    }
    return total;
}

console.log(factorial(3));
