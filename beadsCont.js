// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript

function countRedbeads(n){
    return n === 0 || n === 1 ? 0 : 2 * (n - 1)
}