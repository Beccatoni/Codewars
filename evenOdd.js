/*
https://www.codewars.com/kata/6656a4687f3e4eb5fb520817/train/javascript

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

For example:

evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'
*/

function checkevenOrOdd(n) {
    //'Even' or 'Odd'
    return n % 2 === 0 ? 'Even' : 'Odd';
    
  }

  const evenOrOdd = new Proxy(checkevenOrOdd, {
    get(target, prop){
        return target(Number(prop));
    }
  })

console.log(evenOrOdd(checkevenOrOdd(4)));