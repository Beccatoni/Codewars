// https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

function typeOfTringle(sideA, sideB, sideC){
    if(!(sideA+sideB>sideC && sideA+sideC>sideB && sideB+sideC>sideA)){
        return 'Not a valid triangle'
      } else if(sideA === sideB && sideB===sideC && sideA===sideC){
        return 'Equilateral'
      } else if(sideA !== sideB && sideB!==sideC && sideA!==sideC) {
        return 'Scalene'
      }
      else{
        return 'Isosceles'
      }
    
}