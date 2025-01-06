// reverses a given string

console.log(
    ((numArray) => {
    return numArray.filter((a) => {
        if (a % 2) {
            return true
        } else {
            return false
        }
    })
})([1, 2, 3, 4, 5, 6, 7])
)
