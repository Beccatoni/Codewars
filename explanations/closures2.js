function outerFunction(outerVar){
    return function innerFunction(innerVar){
        console.log(`Outer variable ${outerVar}`);
        console.log(`Inner Variable ${innerVar}`);
    }
}

const newFunction = outerFunction('Outside');
newFunction('Inside');