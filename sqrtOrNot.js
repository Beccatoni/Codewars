// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript


function squareOrSquareRoot(array){
    if(array == [] || array == null){
        return 0
    }

    return array.map((a)=> Number.isInteger(Math.sqrt(a))? Math.sqrt(a): Math.pow(a, 2))
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))