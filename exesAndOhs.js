//  counting the number of xs and os to see if they are equal


function XO(str){
    return str.toLowerCase().split('x').length-1 === str.toLowerCase().split('o').length-1 
};