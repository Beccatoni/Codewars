//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    let words = str.split(/[_-]/)

    for(let i = 1 ;  i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join('')
}