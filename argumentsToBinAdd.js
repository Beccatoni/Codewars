// https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

function arr2bin(arr){
    return arr.reduce((x,y)=> x + (typeof y == 'number'? y:0), 0).toString(2)
}