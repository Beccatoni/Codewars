// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A){
    for (const num of A) {
        let count = A.filter(n => n === num).length
        if(count % 2 !== 0){
            return num;
        }
    }
    return null
}