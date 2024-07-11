// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

function power(num, pow){
    let result = 1;
    for(let i = 1; i <pow; i++ ){
        result *= num
    }
    return result;
}