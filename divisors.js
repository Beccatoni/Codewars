// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer){
    const arr = [];
    
    for (let num = 2; num < integer; num++) {
        if (integer % num === 0) {
            arr.push(num);
        }
    }
    return arr.length == 0 ? `${integer} is prime`: arr
}