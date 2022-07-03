function isPrime(num) {
    let bool = true
    if (num <= 1) return false
    let square = Math.sqrt(num)
    for (let i = 2; i <= square; i++) {
        if (num % i === 0) bool = false
    }
    return bool
}

console.log(isPrime(9))