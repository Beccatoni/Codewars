// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr){
    return [...arr.filter(el => el !== 0 ), ...arr.filter(el => el === 0)]
}