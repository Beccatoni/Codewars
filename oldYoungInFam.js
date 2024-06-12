// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
// Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
  }