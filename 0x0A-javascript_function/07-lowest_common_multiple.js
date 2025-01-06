// calculate the lowest common multiple.
// const lcm = function (n) {
const lcm = module.exports.lcm = function (n) {
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

console.log(lcm(24))
