function add(num1,num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function increment(n){
    n++
    return n
}

function decrement(n){
    n--
    return n
}

function makeInt(n){
    let parsed = parseInt(n,10);
    return parsed
}

function preserveDecimal(n){
    let deci = parseFloat(n)
    return deci
}