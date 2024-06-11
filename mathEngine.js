function mathEngine(arr) {
    // Your code here
    if(!Array.isArray(arr)){
        return 0;
    }
    let product = 1
    let sum = 0;
    for(const num of arr){
      if(num >= 0){
        product *= num;
      } else if(num < 0){
        sum += num;
      } else {
        sum = 1;
      }
    }
    return sum + product;
  }


  console.log(mathEngine([]))