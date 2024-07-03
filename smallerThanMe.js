// https://www.codewars.com/kata/56a1c074f87bc2201200002e/solutions/javascript


function smaller(nums){
    return nums.map((num, index)=> num.slice(++index).filter(number => number < num).length)
}