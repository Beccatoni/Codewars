//https://codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

function mergeStrs(first, second){
    let same;
    for(let i = 0; i<= Math.min(first.length, second.length); i++){
        if(first.slice(-i) === second.slice(0, i)){
            same = i;
            
        }
    }
    return `${first}${second.slice(same)}`
}

// console.log((mergeStrs('abcx', 'abcd')));

/*
function mergeStrings(first, second){
    return `${first} ${second}`.replace(/(.*) \1/, '$1');
}
*/