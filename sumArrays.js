// https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript


function arraySum(arr) {
    // sum ALL the things!
   return arr.reduce((sum,item) =>{
    if(Array.isArray(item)){
        return sum + arraySum(item);
    } else{
        return sum +item
    }
   })
  }

  console.log(arraySum([1, 2, [1, 2]]))