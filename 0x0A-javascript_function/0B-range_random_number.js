// get a random number within a range (<startRange> and <endRange>)
function getRangeRandom(startRange, endRange) {
    return Math.round((Math.random() * startRange) + startRange - endRange)
}

console.log(getRangeRandom(4, 5));
