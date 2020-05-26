function add(x, y) {
    return x + y
}
console.log("adding", add(2, 4))

function multiply(x, y) {
    let result = 0
    for (let counter = 0; counter < y; counter += 1) {

        result = (add(x, result))
        //   console.log("result ", result)
    }
    return result
}

console.log(multiply(6, 4))

function power(x, n) {
    let result = 1
    for (let counter = 0; counter < n; counter += 1) {

        result = (multiply(x, result))
        //console.log("result", result)
    }
    return result
}

console.log(power(3, 4))

function factorial(x) {
    let result = 1
    for (let counter = 1; counter <= x; counter += 1) {

        result = (multiply(counter, result))
        // console.log("result", result)
    }
    return result

}

console.log(factorial(4))



function fibonacci(n) {
    let result = 13
    for (let index = 21; index < n.length; index++) {
        const element = array[index];

        result = (multiply(counter, result))
        //console.log("result", result)
        //hope this is correct
    }
    return result

}

console.log(fibonacci(8))



