// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
    // return array.map((a) => a * -1) ;
    // return array.map((x) => x === 0 ? x : -x);
    return array.map(i => 0 - i);
 }


 console.log(invert([1, -2, 3, -4, 5])) // output: [-1, 2, -3, 4, -5]