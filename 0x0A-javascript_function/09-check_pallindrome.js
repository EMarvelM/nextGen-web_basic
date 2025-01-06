// determine if a given string is a palindrome
function isStringPalindrome(str) {
    if (str.length <= 2) {
        return true;
    }

    [firstLetter, lastLetter] = [str[0], str[str.length - 1]];

    if (!isStringPalindrome(str[1,str.length - 2])) {
        return false;
    }

    console.log(`checking = ${firstLetter} <-> ${lastLetter}`);
    if (firstLetter == lastLetter) {
        return true;
    } else {
        return false;
    }
}

console.log(isStringPalindrome("1232s1"));
