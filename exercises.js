//3-1 flattening
let arrays = [[1,2,3],[4,5],[6]]
export function flattening(list) {
    return list[0].concat(list[1],list[2])
}
console.log(flattening(arrays))

//3-2 your own loop

export function loop (value, test, update, body) {
    while (test(value)) {
        body(value)
        value = update(value)
    }
}

loop (3, n => n > 0, n => n - 1, console.log)

//3-3 everything
export function everyLoop(array, test) {
    let returnValue = true
    for(let item of array) {
        returnValue = returnValue && test(item)
    }
    return returnValue
}

export function everySome(array, test) {
   return !array.some(item => !test(item))
}

console.log(everySome([1,3,5], n => n < 10));
console.log(everySome([2,4,16], n => n < 10));
console.log(everySome([], n => n < 10));