// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = (n) => {
    let num = n.toString(2);
    return num.split('').reduce((a,b)=> a + parseInt(b), 0)
}