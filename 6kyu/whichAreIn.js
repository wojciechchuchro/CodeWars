//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
// Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

//My soultion

function inArray(array1, array2) {
    let arrayIndex = 0
    let bool = ''
    let result = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            for (let k = 0; k < array2[j].length; k++) {
                bool = array1[i].charAt(arrayIndex) === array2[j].charAt(k)
                if (bool === false) {
                    arrayIndex = 0
                }

                if (bool) {
                    arrayIndex++
                }

                if (arrayIndex === array1[i].length) {
                    result.push(array1[i])
                }
            }
        }
    }

    let uniqueResult = result.filter((c, index) => {
        return result.indexOf(c) === index
    })

    return(uniqueResult.sort())
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))