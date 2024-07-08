// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

function chooseBestSum(t, k, ls) {
    // your code
//   the length of the ls should not be less than the k
  console.log(t, k, ls);
  let possibleDistances = []
  if(ls.length < k) {
    return null
    }
//   use a for loop to check if the sum of portion of ls is less than or equal to t 
  for(let i = 0; i< ls.length; i++){
    let distance = ls.slice(i, i+3).reduce((a,b)=> a+b, 0)
    
    if(distance <= t){
      possibleDistances.push(distance);
    }
  }
  return Math.max(...possibleDistances)
  }


  console.log(chooseBestSum(163, 3, [ 50, 55, 56, 57, 58 ]))