//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//My solution

function filter_list(l) {
    // Return a new array with the strings filtered out
    let arrayLength = l.length;
    for (var i = 0; i < arrayLength; i++) {
        if(typeof(l[i])==='string'){
            l.splice(i,1);
            i--;
            console.log(l);
        }
    }
    return l;
}