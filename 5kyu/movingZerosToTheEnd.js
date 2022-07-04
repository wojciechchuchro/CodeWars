function moveZeros(arr) {
    let counter = 0
    let result = arr.filter(element => {
        if(element === 0)
            counter++
            return element !== 0
        }
    )

    for (let i = 0; i < counter; i++) {
        result.push(0)
    }
    return result
}

console.log(moveZeros([1, 2, 0, 3, 4, 5, 0, 6]))