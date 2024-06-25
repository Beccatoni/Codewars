// https://www.codewars.com/kata/56ebcea1b9d927f9bf000544/train/javascript

function geo_mean(nums, arith_mean) {
    let sum = arith_mean * (nums.length + 1);
    let missing_num = sum - nums.reduce((a,c)=> a + c, 0);
    nums.push(missing_num);
     let geometric_mean = nums.reduce((a,b)=> a * b, 1) **( 1/nums.length)
    return geometric_mean;
  }