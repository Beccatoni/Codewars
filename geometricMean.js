// https://www.codewars.com/kata/56ebcea1b9d927f9bf000544/train/javascript

function geometricMean(arr){
    var gm;

    gm = Math.pow((arr.reduce((a,b) => a*Math.abs(b),1)), 1/arr.length);

    return gm;
}

console.log(geometricMean([2, 3, 4, 6, -5]));