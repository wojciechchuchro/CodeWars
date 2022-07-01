//A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
//
// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153
//
// Write a function that, given n, returns whether or not n is a Narcissistic Number.

//My solution

function isNarcissistic(n){
    let result=0;
    let number = n
    const res = [];
    while(n){
        const last = n % 10;
        res.unshift(last);
        n = Math.floor(n / 10);
    }
    for (let i = 0; i < res.length; i++) {
        result += Math.pow(res[i],res.length)
    }
    if(result === number){
        return true;
    }
    else
        return false;
}