// Array.prototype.reduce()
const findProduct = numbers => {
     return numbers.reduce((accumulator, currentValue)=> accumulator * currentValue, 1)
}

console.log(findProduct([2,3,5,1]))