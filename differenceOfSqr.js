
function differenceOfSquares(n) {
    let sum = 0
    let sumSqr = 0 
    for(let i = 1; i <= n; i++){
      sum += i ;
      sumSqr += i**2
    }
   return sum**2 - sumSqr
  }