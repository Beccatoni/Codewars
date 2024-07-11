// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOf2(n){
    let powers = [];
    if(n < 0) return;
    for (let i = 0; i <= n; i++) {
        powers.push(2**i);
    }
}