// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let arrnum = numbers.split(' ').map(Number);
    // or
    // numbers = numbers.split(' ');

    // return `${Math.max(...numbers) Math.min(...numbers)}`;
  return String([Math.max(...arrnum), Math.min(...arrnum)].join(' '));
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


// or
// const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;