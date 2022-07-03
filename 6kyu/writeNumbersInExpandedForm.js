//Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

//My solution

function expandedForm(num) {
    num += ''
    let length = num.length
    let result = ''
    for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) !== '0') {
            result += num.charAt(i)
        }
        for (let j = length; j > 1; j--) {
            if (num.charAt(i) !== '0') {
                result += '0'
            }
        }
        length--
        if (num.charAt(i) !== '0') {
            result += ' + '
        }
    }
    result = result.slice(0, -3)
    return result
}

console.log(expandedForm(42))