// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

function doubleEveryOther(a){
    for (let index = 0; index < a.length; index++) {
       if(index%2 !== 0){
        a[index] *=2
       }
        
    }
    return a
}