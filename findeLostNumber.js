// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findLostDeletedNum(arr, mixArr){
    return arr.find(n=> !mixArr.includes(n))
}