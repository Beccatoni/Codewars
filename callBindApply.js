var obj = {num:2};


var addToThis = function(a,b,c){
    return this.num + a + b + c;
}
// call function attaches a function to an object temporarily
console.log(addToThis.call(obj, 1, 2, 4));

//  apply function only takes arguments as array-like object argument
var arr = [1,2,4];
console.log(addToThis.apply(obj, arr));


// 
