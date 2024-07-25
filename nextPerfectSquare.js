// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq){
    const x = sq**0.5
    if(Number.isInteger(x)){
        return (x+1)**2
    }
    return -1
}