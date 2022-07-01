// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
//

//My solution

function sameCase(a, b) {
    if ((isLowerCase(a) && isLowerCase(b)) || (isUpperCase(a) && isUpperCase(b)))
        return 1;
    else if ((isLowerCase(a) && isUpperCase(b)) || (isUpperCase(a) && isLowerCase(b)))
        return 0;
    else
        return -1;
}
    function isUpperCase(a){
        if( a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90 )
            return true;
    }
    function isLowerCase(a) {
        if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122)
            return true
    }