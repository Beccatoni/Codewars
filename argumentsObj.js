function hello(){
    console.log(arguments[0]);
}

// hello('head');


const arguments = [1,2,3];
const a = () => arguments[0];
console.log(a());
