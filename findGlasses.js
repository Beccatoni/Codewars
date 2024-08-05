// https://www.codewars.com/kata/6512c786a07f6a000fe7a274/train/javascript

function findGlasses(arr){
    let regEx = /O-+O/

    for(let i = 0; i < arr.length; i++){
        if(regEx.test(arr[i])){
            return i 
        }
    }

    return undefined
}

// another way
/*
function findGlasses(a){
return a.findIndex(e => /O-+O/.test(e))
}

*/